import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { AdminService } from '../../shared/service/admin.service';
import { ToastrService } from 'ngx-toastr';
import { SelectionModel } from '@angular/cdk/collections';
import { environment } from '../../../environments/environment.prod';
declare var $;
import swal from 'sweetalert2';

@Component({
  selector: 'app-manage-homeinspect-subscription',
  templateUrl: './manage-homeinspect-subscription.component.html',
  styleUrls: ['./manage-homeinspect-subscription.component.scss']
})
export class ManageHomeinspectSubscriptionComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "name",
    "price",
    "no_of_days",
    "subscription_type",
    "description",
    "status",
    "action",
  ];
  dataSource;
  offset = 0;
  limit = 10;
  sortby = "name";
  direction = "asc";
  userListing;
  length;
  reqData;
  search = "";
  item_id;
  selection = new SelectionModel(true, []);
  getData;

  addForm: FormGroup;
  editForm: FormGroup;
  editData;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    public adminService: AdminService,
    private toastr: ToastrService
  ) {
    this.addForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      subscription_type: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      no_of_days: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
    });
    this.editForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      subscription_type: [null, Validators.compose([Validators.required])],
      price: [null, Validators.compose([Validators.required])],
      no_of_days: [null, Validators.compose([Validators.required])],
      description: [null, Validators.compose([Validators.required])],
    });


  }

  ngOnInit(): void {
    this.editData = {}
    this.dataSource = [];
    this.reqData = {};
    this.getData = {};
    this.getData.subscription_type = ''
    this.getAllDataList();
  }

  addSubscription() {
    let obj = {
      name: this.getData.name,
      subscription_type: this.getData.subscription_type,
      price: this.getData.price,
      // no_of_service: this.getData.no_of_service,
      // no_of_request: this.getData.no_of_request,
      no_of_days: this.getData.no_of_days,
      description: this.getData.description,
    };
    console.log('reqbody==================', this.reqData)

    this.adminService.AddHomeInspectSubscription(obj).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 201) {
          $("#AddModal").modal("hide");
          this.addForm.reset()
          this.toastr.success("Data added successfully", "Success");
          this.ngOnInit();
        }
      },
      (err) => {
        console.log(err);
        var msg = err.message
        if (err.status >= 404) {
          console.log("Some error occured",err);
          this.toastr.warning(msg.message, "Warning");
        } else {
          this.toastr.error("Some error occured, please try again!!", "Error");
          console.log("Internet Connection Error",err);
        }
      }
    );
  }
  openEditModal(data){
    this.editData  = {}
    this.editData = data
    $('#EditModal').modal('show')

  }
  editSubscription() {

    let obj = {
      name: this.editData.name,
      subscription_type: this.editData.subscription_type,
      price: this.editData.price,
      // no_of_service: this.editData.no_of_service,
      // no_of_request: this.editData.no_of_request,
      no_of_days: this.editData.no_of_days,
      description: this.editData.description,
      subs_id: this.editData._id,
    };
      console.log('reqbody==================', obj)

    this.adminService.EditHomeInspectSubscription(obj).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          $("#EditModal").modal("hide");
          this.editForm.reset()
          this.toastr.success("Data edit successfully", "Success");
          this.ngOnInit();
        }
      },
      (err) => {
        console.log(err);
        if (err.status >= 404) {
          console.log("Some error occured",err);
        } else {
          this.toastr.error("Some error occured, please try again!!", "Error");
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
    this.GetDataList(obj);
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
    this.GetDataList(obj);
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
    this.GetDataList(obj);
  }

  getAllDataList() {
    const obj = {
      offset: this.offset,
      limit: this.limit,
      sortby: this.sortby,
      direction: this.direction,
      search: this.search,
    };
    this.GetDataList(obj);
  }

  GetDataList(obj) {
    console.log('obj===================',obj)
    this.adminService.GetHomeInspectSubscriptionListData(obj).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          this.length = data.response_data.count;
          this.reqData = JSON.stringify(data.response_data.data);
          this.userListing = JSON.parse(this.reqData);
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

  deleteItem(id) {
    swal
      .fire({
        title: "Are you sure?",
        text: "You will not be able to recover this records!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      })
      .then((result) => {
        if (result.value) {
          const obj = {
            realtors_id: id,
          };
          this.adminService.DeleteHomeInspectSubscription(obj).subscribe(
            (data) => {
              console.log(data);
              if (data.code === 200) {
                this.toastr.success("Record deleted successfully", "Success");
                this.getAllDataList();
              }
            },
            (err) => {
              console.log(err.status);
              if (err.status >= 404) {
                console.log("Some error occured");
              } else {
                // this.toastr.error(
                //   "Some error occured, please try again!!",
                //   "Error"
                // );
                console.log("Internet Connection Error");
              }
            }
          );
        }
      });
  }

  changeStatus(data) {
    var status: boolean
    if(data.isActive){
      status = false
    }else{
      status = true
    }
    let obj = {
      _id: data._id,
      isActive: status,
      schemaName: 'homeInspectorsSubscription',
    };
      console.log('reqbody==================', obj)

    this.adminService.changeStatusAllUsers(obj).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          this.toastr.success("Status change successfully", "Success");
          this.getAllDataList();
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

}
