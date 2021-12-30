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
  selector: 'app-home-page-content',
  templateUrl: './home-page-content.component.html',
  styleUrls: ['./home-page-content.component.scss']
})
export class HomePageContentComponent implements OnInit {

  displayedColumns: string[] = [

    "id",
    "image",
    "heading",
    "description",
    "action",
  ];
  dataSource;
  offset = 0;
  limit = 10;
  sortby = "heading";
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
    this.addMenuForm = formBuilder.group({
      page_heading: [null, Validators.compose([Validators.required])],
      page_description: [null, Validators.compose([Validators.required])],
    });
    this.editMenuForm = formBuilder.group({
      page_heading: [null, Validators.compose([Validators.required])],
      page_description: [null, Validators.compose([Validators.required])],
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

  addCMS() {
    const formData = new FormData();
    if(this.image){

      formData.append('image', this.image);
    }else{
      this.toastr.warning('Please select image','Warning')
      return
    }
    // formData.append('page_name', this.getData.page_name);
    formData.append('heading', this.getData.page_heading);
    formData.append('description', this.getData.page_description);

    this.adminService.AddHomePageContent(formData).subscribe(
      (data) => {
        console.log(data);
        if (data.code === 201) {
          $("#menuModal").modal("hide");
          this.toastr.success("Data added successfully", "Success");
          this.image = ''
          this.addMenuForm.reset();
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
  openEditModal(data){
    this.editData  = {}
    this.editData = data

    console.log('this.editData==================', this.editData)
    $('#menuEditModal').modal('show')

  }
  editCMS() {

    const formData = new FormData();
    if(this.image){

      formData.append('image', this.image);
    }
    // formData.append('page_name', this.editData.page_name);
    formData.append('heading', this.editData.heading);
    formData.append('description', this.editData.description);
    formData.append('_id', this.editData._id);


    this.adminService.EditHomePageContent(formData).subscribe(
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
    this.adminService.GetHomePageContentListData(obj).subscribe(
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

  deleteData(id) {
    swal
      .fire({
        title: "Are you sure?",
        text: "You will not be able to recover this Data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, keep it",
      })
      .then((result) => {
        if (result.value) {
          const obj = {
            _id: id,
          };
          this.adminService.DeleteHowItWork(obj).subscribe(
            (data) => {
              console.log(data);
              if (data.code === 200) {
                this.toastr.success("Data deleted successfully", "Success");
                this.ngOnInit();
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


  readURL(fileInput: any) {
    // this.imageError = null;
    if (fileInput.target.files && fileInput.target.files[0]) {
        // Size Filter Bytes
        const max_size = 20971520;
        const allowed_types = ['image/png', 'image/jpeg'];
        const max_height = 938;
        const max_width =  1920;

        if (fileInput.target.files[0].size > max_size) {
            // this.imageError =
                this.toastr.warning('Maximum size allowed is '+ max_size / 1000 + 'Mb');

            return false;
        }

        if (!_.includes(allowed_types, fileInput.target.files[0].type)) {

            this.toastr.warning( 'Only Images are allowed (JPG | PNG)');
            return false;
        }
        const reader = new FileReader();
        reader.onload = (e: any) => {
            const image = new Image();
            image.src = e.target.result;
            image.onload = rs => {
                const img_height = rs.currentTarget['height'];
                const img_width = rs.currentTarget['width'];

                console.log(img_height, img_width);


                if (img_height < max_height && img_width < max_width) {
                    // this.imageError =
                  console.log('Minimum dimentions allowe')
                    this.toastr.warning('Minimum dimentions allowed ' +
                        max_height +
                        '*' +
                        max_width +
                        'px');
                    return false;
                } else {
                  console.log('Minimum dimentions allowe')

                    const imgBase64Path = e.target.result;
                    this.image = fileInput.target.files[0]
                    // console.log('imgBase64Path====', imgBase64Path)
                    // this.cardImageBase64 = imgBase64Path;
                    // this.isImageSaved = true;
                    // this.previewImagePath = imgBase64Path;
                }
            };
        };

        reader.readAsDataURL(fileInput.target.files[0]);
    }
}



  readURL1(event) {
    this.percentDone = 100;
    this.uploadSuccess = true;
    let image:any = event.target.files[0];
    this.size = image.size;
    let fr = new FileReader();
    fr.onload = () => { // when file has loaded
     var img:any = new Image();
     console.log(img.height)

     img.onload = () => {
         this.width = img.width;
         this.height = img.height;
     };

     img.src = fr.result; // This is the data URL
    };

   fr.readAsDataURL(image);
    // this.imgType.nativeElement.value = "";
    console.log(this.width, this.height)

  }
}
