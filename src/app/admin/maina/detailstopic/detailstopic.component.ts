import { Component, OnInit, Injector} from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-detailstopic',
  templateUrl: './detailstopic.component.html',
  styleUrls: ['./detailstopic.component.css']
})
export class DetailstopicComponent extends BaseComponent implements OnInit {
  itemsohuu:any;
  id: any;
  itemsinger:any;
  itemnhomtg:any;
  itemhoso: any;
  itemdetai:any;
  constructor(private injector: Injector) {
    super(injector)
   }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{ 
      this.id = params["id"];
      this._api.get("api/detai/get_detai_id/"+this.id).subscribe(res=>{
        this.itemdetai = res;
        console.log(this.itemdetai);
      });
      this._api.get("api/sohuudetai/get_sohuudetai_iddetai/"+this.id).subscribe(res=>{
        this.itemsohuu = res;
        // console.log(this.itemsohuu);
      });
      this._api.get("api/nhomtg/get_nhomtg_all/"+this.id).subscribe(res=>{
        this.itemnhomtg = res;
        // console.log(this.itemnhomtg);
      });
      this._api.get("api/hoso/get_hoso_iddetai/"+this.id).subscribe(res=>{
        this.itemhoso = res;
        // console.log(this.itemhoso);
      });
    })
  }
  delete_sohuu(id){

  }
  edit_sohuu(id){

  }
  edit_nhomtg(id){

  }
  delete_nhomtg(id){

  }
  edit_hoso(id){

  }
  delete_hoso(id){

  }
  resultkqbv(kqbv){
    var kq="";
    switch(kqbv){
      case 1:
        kq = "Xuất sắc";
        break;
      case 2:
        kq = "Giỏi";
        break;
      case 3:
        kq = "Khá";
        break;
      case 4:
        kq = "Trung bình";
        break;
      case 5:
        kq = "Kém";
        break;
    }
    return kq;
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
