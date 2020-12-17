import { Component, OnInit, Injector, ViewChild} from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';
import Swal from 'sweetalert2';
import {Md5} from 'ts-md5/dist/md5';
declare var $:any;
@Component({
  selector: 'app-offices',
  templateUrl: './offices.component.html',
  styleUrls: ['./offices.component.css']
})
export class OfficesComponent extends BaseComponent implements OnInit {
  @ViewChild('closebutton') closebutton;
  ser:any="";
  item:any;
  itemrole:any;
  pagesize:any = 5;
  pageindex:any = 1;
  hinhanh:any;
  constructor(private injector: Injector) {
    super(injector)
   }
  ngOnInit(): void {
    this._api.get("api/user/get_user_pagesize?pagesize="+this.pagesize+"&&pageindex="+this.pageindex+"&&search=").subscribe(res=>{
      this.item = res;
      console.log(this.item);
    });
    this._api.get("api/role/get_role_all").subscribe(res=>{
      this.itemrole = res;
      console.log(this.itemrole);
    });
  }
  preup_(search){
    this.ser = search;
  }
  search_(){
    this._api.get("api/user/get_user_pagesize?pagesize="+this.pagesize+"&&pageindex="+this.pageindex+"&&search="+this.ser).subscribe(res=>{
      this.item = res;
      console.log(this.item);
    });
  }
  onpagination_(i){
    var a = (this.item.total / this.pagesize).toFixed();
    if(i<1){
      this.pageindex = 1;
    }
    else{
      if(i>a){
        this.pageindex = a;
      }
      else{
        this.pageindex = i;
      }
    }  
    this._api.get("api/user/get_user_pagesize?pagesize="+this.pagesize+"&&pageindex="+this.pageindex+"&&search="+this.ser).subscribe(res=>{
      this.item = res;
    });
  }
  pagination(tong){
    let a:number[]= [];
    var total = (tong/this.pagesize).toFixed();
    for(var i = 1; i <= parseInt(total); i++){
      a.push(i);
    }
    return a;
  }
  onimg(event){
    this.hinhanh = event.target;
  }
  taikhoan:any;
  matkhau:any;
  create(){
    this.taikhoan = "";
    this.matkhau = "";
  }
  exec(tk,mk,role){
    const md5 = new Md5();
    this.getEncodeFromImage(this.hinhanh).subscribe(res=>{
      var formdata = {
        taikhoan : tk,
        matkhau : md5.appendStr(mk).end(),
        hinhanh : res,
        idrole : parseInt(role),
      }
      console.log(formdata);
        this._api.post("api/user/create_user",formdata).subscribe(res=>{
          if(res){           
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Thêm thành công',
              showConfirmButton: false,
              timer: 1500
            });         
            this._api.get("api/user/get_user_pagesize?pagesize="+this.pagesize+"&&pageindex="+this.pageindex+"&&search="+this.ser).subscribe(res=>{
              this.item = res;
            });
            this.closebutton.nativeElement.click();
          }
          else{
            Swal.fire({
              position: 'top-end',
              icon: 'error',
              title: 'Thêm thất bại',
              showConfirmButton: false,
              timer: 1500
            })
          }
        });
    });   
  }
}
