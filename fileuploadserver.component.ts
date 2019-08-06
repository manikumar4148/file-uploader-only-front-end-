import { Component, OnInit } from '@angular/core';
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://192.168.2.202:7000/fileupload';
@Component({
  selector: 'app-fileuploadserver',
  templateUrl: './fileuploadserver.component.html',
  styleUrls: ['./fileuploadserver.component.scss']
})
export class FileuploadserverComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url:URL});
  constructor() { }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('FileUpload:uploaded:', item,status,response);
         alert('File uploaded successfully');
     };
  
  }
  file:any;
arrayBuffer:any;

    
}
