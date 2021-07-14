import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { AdminService } from '../shared/service/admin.service';
import { ToastrService } from 'ngx-toastr';
import { SelectionModel } from '@angular/cdk/collections';
import { environment } from '../../environments/environment.prod';
declare var $;
import swal from 'sweetalert2';

@Component({
  selector: 'app-restaurant-user',
  templateUrl: './restaurant-user.component.html',
  styleUrls: ['./restaurant-user.component.scss']
})
export class RestaurantUserComponent implements OnInit {
  displayedColumns: string[] = [
    "select",
    "id",
    "logo",
    "name",
    "email",
    "address",
    "city",
    "webUrl",
    "status",
    "action",
  ];
  dataSource;
  offset = 0;
  limit = 10;
  sortby = "categoryName";
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
  restaurantImageUrl;
  logo
  lat = '40.7604062';
  lng = '73.992990';
  stateData
  cityData
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public formBuilder: FormBuilder,
    public adminService: AdminService,
    private toastr: ToastrService
  ) {
    this.addForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      state_id: [null, Validators.compose([Validators.required])],
      city: [null, Validators.compose([Validators.required])],
      // webUrl: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });
    this.editForm = formBuilder.group({
      name: [null, Validators.compose([Validators.required])],
      email: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
      address: [null, Validators.compose([Validators.required])],
      state_id: [null, Validators.compose([Validators.required])],
      city: [null, Validators.compose([Validators.required])],
      // webUrl: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])],
    });
    this.restaurantImageUrl = `${environment.baseImageRestaurant}`;


  }

  ngOnInit(): void {
    this.editData = {}
    this.dataSource = [];
    this.reqData = {};
    this.getData = {};
    this.getData.categoryId = ''
    this.getData.state_id = ''
    this.getData.city = ''
    this.editData.state_id = ''
    this.editData.city = ''
    this.RestaurantAllList();
    this.GetStateListData()
  }
  GetStateListData() {

    this.adminService.GetActiveStateListData().subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          this.stateData = data.response_data;
        }
      },
      (err) => {
        console.log(err);
        if (err.status === 404) {
          console.log("Some error occured");
          // this.toastr.error("Some error occured, please try again!!", "Error");
          console.log("Internet Connection Error");
        }
      }
    );
  }
   getcityListData(data:any) {
console.log(data)
var obj ={
  state_id:data
}
    this.adminService.GetStateCityListData(obj).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          this.cityData = data.response_data;
        }
      },
      (err) => {
        console.log(err);
        if (err.status === 404) {
          console.log("Some error occured");
          // this.toastr.error("Some error occured, please try again!!", "Error");
          console.log("Internet Connection Error");
        }
      }
    );
  }


  addRestaurant() {
    const formData = new FormData();
    if(this.logo){
      formData.append('logo', this.logo);
    }
    formData.append('name', this.getData.name);
    formData.append('email', this.getData.email);
    formData.append('phone', this.getData.phone);
    formData.append('address', this.getData.address);
    formData.append('city', this.getData.city);
    formData.append('state_id', this.getData.state_id);
    formData.append('webUrl', this.getData.webUrl);
    formData.append('password', this.getData.password);
    formData.append('lat', this.lat);
    formData.append('lng', this.lng);

    this.adminService.AddRestaurant(formData).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 201) {
          $("#restaurantModal").modal("hide");
          this.addForm.reset()
          this.ngOnInit()
          this.logo = ''
          this.getData.categoryId = ''
          this.getData.state_id = ''
          this.getData.city = ''
          this.toastr.success("Restaurant added successfully", "Success");
          this.RestaurantAllList();
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
async  openEditModal(data){
    this.editData  = {}
    this.editData = data
    this.editData.password = data.dec_password
    console.log('this.editData==================', this.editData)
    if(this.editData.state_id){
      await this.getcityListData(this.getData .state_id)

     }

    $('#restaurantEditModal').modal('show')

  }
  editRestaurant() {

    const formData = new FormData();
    if(this.logo){
      formData.append('logo', this.logo);
    }
    formData.append('restaurant_id', this.editData._id);
    formData.append('name', this.editData.name);
    formData.append('email', this.editData.email);
    formData.append('phone', this.editData.phone);
    formData.append('address', this.editData.address);
    formData.append('city', this.editData.city);
    formData.append('webUrl', this.editData.webUrl);
    formData.append('password', this.editData.password);
    formData.append('lat', this.lat);
    formData.append('lng', this.lng);


    this.adminService.EditRestaurant(formData).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          $("#restaurantEditModal").modal("hide");
          this.editForm.reset()
          this.logo = ''
          this.toastr.success("Restaurant edit successfully", "Success");
          this.RestaurantAllList();
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
    this.GetRestaurantList(obj);
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
    this.GetRestaurantList(obj);
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
    this.GetRestaurantList(obj);
  }

  RestaurantAllList() {
    const obj = {
      offset: this.offset,
      limit: this.limit,
      sortby: this.sortby,
      direction: this.direction,
      search: this.search,
    };
    this.GetRestaurantList(obj);
  }

  GetRestaurantList(obj) {
    console.log('obj===================',obj)
    this.adminService.GetRestaurantListData(obj).subscribe(
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
        text: "You will not be able to recover this Restaurant!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      })
      .then((result) => {
        if (result.value) {
          const obj = {
            restaurant_id: id,
          };
          this.adminService.DeleteRestaurant(obj).subscribe(
            (data) => {
              console.log(data);
              if (data.code === 200) {
                this.toastr.success("Restaurant deleted successfully", "Success");
                this.RestaurantAllList();
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
      schemaName: 'restaurant',
    };
      console.log('reqbody==================', obj)

    this.adminService.changeStatusCategory(obj).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 200) {
          this.toastr.success("Menu status change successfully", "Success");
          this.RestaurantAllList();
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
  multiDelete() {
    if (this.selection.selected.length > 0) {
      console.log(this.selection.selected);

      swal
        .fire({
          title: "Are you sure?",
          text: "You want to change the status of selected Restaurants!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, change it!",
          cancelButtonText: "No, keep it",
        })
        .then((result) => {
          if (result.value) {
            const obj = {
              restaurant_id_arr: this.selection.selected,
            };
            this.adminService.DeleteMultipleRestaurant(obj).subscribe(
              (data) => {
                console.log(data);
                if (data.code === 200) {
                  this.toastr.success("Restaurants deleted successfully", "Success");
                  this.selection.clear();
                  this.RestaurantAllList();
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
    } else {
      // this.toastr.warning("Please Select the row.");
      return;
    }
  }
  readURL(event) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // console.log('file ',file.size);
      if (
        file.type !== 'image/jpeg' &&
        file.type !== 'image/png' &&
        file.type !== 'image/jpg'
      ) {
        this.toastr.warning('Please upload image file')
        return;
      }

      const reader = new FileReader();

      // reader.onload = (e) => (this.userImageSrc = reader.result);

      reader.onloadend = (loadEvent) => {
        // console.log(reader)
        const mainImage = reader.result;
        this.logo = file;
      };

      reader.readAsDataURL(file);
    }
  }
}
