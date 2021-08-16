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
  selector: 'app-home-inspector-details',
  templateUrl: './home-inspector-details.component.html',
  styleUrls: ['./home-inspector-details.component.scss']
})
export class HomeInspectorDetailsComponent implements OnInit {

  displayedColumns: string[] = [
    "select",
    "id",
    "image",
    "name",
    "email",
    "phone",
    "zipCode",
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
  profileImageUrl;
  logo
  lat = '40.7604062';
  lng = '73.992990';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    public adminService: AdminService,
    private toastr: ToastrService
  ) {

    this.profileImageUrl = `${environment.baseImageHomeInspectorProfile}`;


  }

  ngOnInit(): void {
    // this.editData = {}
    this.dataSource = [];
    this.reqData = {};
    // this.getData = {};
    this.route.paramMap.subscribe(params => {
      let obj = params.get("id")

      this.GetDataDetailsData(obj)
    })
  }

  GetDataDetailsData(obj) {
    console.log('obj===================',obj)
    var ob= {
      home_id : obj
    }
    this.adminService.HomeInspectDetails(ob).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          this.getData = data.response_data;
          console.log('getData=================', this.getData)

          // this.reqData = JSON.stringify(data.response_data.data);
          // this.userListing = JSON.parse(this.reqData);
          // console.log("reqData", this.userListing);
          // this.dataSource = this.userListing;
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
      schemaName: 'homeinspector',
    };
      console.log('reqbody==================', obj)

    this.adminService.changeStatusAllUsers(obj).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          this.toastr.success("Status change successfully", "Success");
          this.ngOnInit()
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
