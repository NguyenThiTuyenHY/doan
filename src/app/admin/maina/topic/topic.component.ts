import { Component, OnInit, Injector} from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';
import Swal from 'sweetalert2';
declare var CKEDITOR: any;
declare var $:any;
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent extends BaseComponent implements OnInit {
  item:any;
  itemsinger:any;
  them:any=true;
  tendt:any;
  loainc:any;
  ten: any;
  sohieu:any;
  namsanxuat:any;
  tap: any;
  so: any;
  trang: any;
  soif: any;
  minhchung: any;
  thoigianbd: any;
  thoigiankt: any;
  itemlinhvuc: any;
  itemloainhiemvu: any;
  itemhoatdong: any;
  constructor(private injector:Injector) {
    super(injector)
   }
  ckeditorContent:any;
  ngOnInit(): void {
    CKEDITOR.on('instanceCreated', function (event, data) {
      var editor = event.editor,
      element = editor.element;
      editor.name = "content"
   });
   this._route.params.subscribe(params=>{   
    this._api.get("api/detai/get_detai_pagesize?pagesize="+5+"&&pageindex="+0+"&&search=").subscribe(res=>{
      this.item = res;
    });
    this._api.get("api/linhvuc/get_linhvuc_all").subscribe(res=>{
      this.itemlinhvuc = res;
    });
    this._api.get("api/loainhiemvu/get_loainhiemvu_all").subscribe(res=>{
      this.itemloainhiemvu = res;
    });
    this._api.get("api/hoatdongnckh/get_hoatdongnckh_all").subscribe(res=>{
      this.itemhoatdong = res;
      console.log(this.itemhoatdong);
    });
  })
  }
  edit(id){
    this.them = false;
    this._api.get("api/detai/get_don_vi_by_id/"+id).subscribe(res=>{
      this.itemsinger = res;
    });
  }
  create(){
    this.them = true;
  }
  filepdf:any;
  changemc(event){
    this.filepdf = event.target;
  }
  loaddata(){
    this._api.get("api/donvi/get_don_vi_all").subscribe(res=>{
      this.item = res;
      console.log(this.item);
    })
  }
  exec(dv , sohieu, tap, so, trang, soif, lv, lnv, hdnckh, tgbd, tgkt , cbv){
    this.getEncodeFromImage(this.filepdf).subscribe(res=>{
      var Formdata = {
        tendetai : dv,
        sohieu:sohieu,
        tap: tap,
        so: so,
        trang: trang,
        soif : soif,
        minhchung: res,
        tinhtrang: 1,
        ghichu: CKEDITOR.instances.content.getData(),
        idlinhvuc: lv,
        idloainv: lnv,
        idhdnckh:hdnckh,
        thoigianbd:tgbd,
        thoigiannnt: tgkt,
        capbv: cbv
      }
      console.log(Formdata);
      // if(this.them){
      //   this._api.post("api/donvi/create_don_vi",Formdata).subscribe(res=>{
      //     if(res){           
      //       Swal.fire({
      //         position: 'top-end',
      //         icon: 'success',
      //         title: 'Thêm thành công',
      //         showConfirmButton: false,
      //         timer: 1500
      //       });         
      //       this.loaddata();
      //       $("#exampleModal").modal('hide');
      //     }
      //     else{
      //       Swal.fire({
      //         position: 'top-end',
      //         icon: 'error',
      //         title: 'Thêm thất bại',
      //         showConfirmButton: false,
      //         timer: 1500
      //       })
      //     }
      //   });
      // }
      // else{
      //   this._api.put("api/donvi/edit_don_vi/"+this.itemsinger.madonvi,Formdata).subscribe(res=>{
      //     if(res){           
      //       Swal.fire({
      //         position: 'top-end',
      //         icon: 'success',
      //         title: 'Sửa thành công',
      //         showConfirmButton: false,
      //         timer: 1500
      //       });
      //       this.loaddata();
      //       $("#closeModel").click();
      //     }
      //     else{
      //       Swal.fire({
      //         position: 'top-end',
      //         icon: 'error',
      //         title: 'Sửa thất bại',
      //         showConfirmButton: false,
      //         timer: 1500
      //       })
      //     }
      //   });
      // }
    });
  }
  delete_(id){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Bạn có chắc không?',
      text: "Bạn sẽ không thể hoàn nguyên điều này!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Có, xóa nó!',
      cancelButtonText: 'Không, hủy bỏ!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this._api.delete("api/donvi/delete_don_vi/"+id).subscribe(res=>{
          if(res){           
            swalWithBootstrapButtons.fire(
              'Đã xóa!',
              'Tệp của bạn đã bị xóa.',
              'success'
            );
            this.loaddata();
          }
          else{
            swalWithBootstrapButtons.fire(
              'Thất bại!',
              'Tệp của bạn chưa xóa.',
              'error'
            );
          }
        });
        
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Đã hủy',
          'Tệp của bạn an toàn :)',
          'error'
        );
      }
    })
  }
  splittenhdnckh(tenhdnckh){
    var a =  tenhdnckh.split(' ');
    var b = "";
    for(var i = 0;i < 11; i++){
      b = b + " " + a[i];
    }
    return b+"...";
  }
  resultbv(capbv){
    switch(capbv){
      case 1: 
        return "Đề tài cấp bộ";
      case 2:
        return "Đề tài cấp trường";
      case 3:
        return "Đề tài cấp nhà nước";
    }
  }
}
