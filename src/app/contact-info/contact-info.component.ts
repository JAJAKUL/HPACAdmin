import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { AdminService } from "../shared/service/admin.service";
import { ToastrService } from "ngx-toastr";
import { isDataSource, SelectionModel } from "@angular/cdk/collections";
import { environment } from "../../environments/environment.prod";
declare var $;
import * as _ from 'underscore';
import swal from "sweetalert2";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.scss']
})
export class ContactInfoComponent implements OnInit {

  displayedColumns: string[] = [

    "id",
    "email",
    "phone",
    "address",
    "action",
  ];
  dataSource;
  offset = 0;
  limit = 10;
  sortby = "email";
  direction = "asc";
  userListing;
  length;
  reqData;
  search = "";
  item_id;
  selection = new SelectionModel(true, []);
  getData;

  addMenuForm: FormGroup;
  editMenuForm: FormGroup;
  editData;
  imageUrl;
  image
  categoryList;
  restaurantList;


  percentDone: number;
  uploadSuccess: boolean;
  size:any;
  width:number;
  height:number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    public adminService: AdminService,
    private toastr: ToastrService
  ) {

    this.editMenuForm = formBuilder.group({
      phone: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
    });
    this.imageUrl = `${environment.baseImageHomeContentPage}`;


  }

  ngOnInit(): void {
    this.editData = {}
    this.dataSource = [];
    this.reqData = {};
    this.getData = {};
    this.CMSAllList();

  }


  openEditModal(data){
    this.editData  = {}
    this.editData = data

    console.log('this.editData==================', this.editData)
    $('#menuEditModal').modal('show')

  }
  editCMS() {

    const formData = new FormData();

    formData.append('email', this.editData.email);
    formData.append('phone', this.editData.phone);
    formData.append('address', this.editData.address);
    formData.append('_id', this.editData._id);


    this.adminService.EditContactInfo(formData).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          $("#menuEditModal").modal("hide");
          this.toastr.success("Data edit successfully", "Success");
          this.image = ''
          this.ngOnInit();
        }
      },
   (err) => {
        console.log(err);
        var msg= err.message.message
        if (err.status >= 404) {
          console.log("Some error occured",err);
          this.toastr.error(msg, "Error");
        } else {

          this.toastr.error(msg, "Error");
          console.log("Internet Connection Error",err);
        }
      }
    );
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach((row) => this.selection.select(row._id));
  }

  checkboxLabel(row): string {
    if (!row) {
      return `${this.isAllSelected() ? "select" : "deselect"} all`;
    }
    return `${this.selection.isSelected(row) ? "deselect" : "select"} row ${
      row.position + 1
    }`;
  }

  applyFilter(value) {
    // console.log('----------val',value)
    const obj = {
      offset: this.offset,
      limit: this.limit,
      sortby: this.sortby,
      direction: this.direction,
      search: value,
    };
    this.search = value;
    this.GetCMSList(obj);
  }

  sortData(event) {
    console.log("event====================sortdata", event);

    const obj = {
      offset: this.offset,
      limit: this.limit,
      sortby: event.active,
      direction: event.direction,
      search: this.search,
    };
    this.sortby = event.active;
    this.direction = event.direction;
    this.GetCMSList(obj);
  }

  onPageFired(event) {
    const obj = {
      offset: (event.pageIndex * event.pageSize).toString(),
      limit: event.pageSize,
      sortby: this.sortby,
      direction: this.direction,
      search: this.search,
    };
    this.offset = event.pageIndex * event.pageSize;
    this.limit = event.pageSize;
    this.GetCMSList(obj);
  }

  CMSAllList() {
    const obj = {
      offset: this.offset,
      limit: this.limit,
      sortby: this.sortby,
      direction: this.direction,
      search: this.search,
    };
    this.GetCMSList(obj);
  }

  GetCMSList(obj) {
    console.log('obj===================',obj)
    this.adminService.GetContactInfoListData(obj).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          this.length = data.response_data.length;
          // this.reqData = JSON.stringify(data.response_data.data);
          this.userListing = data.response_data;
          console.log("reqData", this.userListing);
          this.dataSource = this.userListing;
        }
      },
      (err) => {
        console.log(err);
        if (err.status === 404) {
          this.dataSource = [];
          console.log("Some error occured");
          // this.toastr.error("Some error occured, please try again!!", "Error");
          console.log("Internet Connection Error");
        }
      }
    );
  }





}
