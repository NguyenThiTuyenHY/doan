import { Component, OnInit, Injector} from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';
import Swal from 'sweetalert2';
declare var CKEDITOR: any;
@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent extends BaseComponent implements OnInit {

  item:any;
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
  }

}
