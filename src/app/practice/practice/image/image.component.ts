import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  selectedFile=null;
  retrivedImage: File;
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelect(event){
    this.selectedFile=event.target.files[0];
    
    var fileReader=new FileReader();
    fileReader.readAsDataURL(this.selectedFile);
    fileReader.onload=(e:any)=>{this.retrivedImage=e.target.result}
  }
  onUpload(){

    // console.log(event);
  }
 

}
