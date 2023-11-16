import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { DemoAPI } from '../demo-api';
import { Observable } from 'rxjs';
import { ApiIntegrationService } from '../apiintegration.service';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent implements OnInit{
  constructor(private service:ApiIntegrationService, private router:Router){}

  @Input() postInfo:any;
  userid=""
  id="";
  title="";
  body=""

  datashow=new FormGroup({
    userid:new FormControl('',[Validators.required]),
    id:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required]),
    body:new FormControl('',[Validators.required])
  })
  
ngOnInit():void{

  this.userid=this.postInfo.userId;
  this.id=this.postInfo.id;
  this.title=this.postInfo;
  this.body=this.body;
}

addPost(){
  debugger
  var dataInsert={
    userid:this.userid,
    id:this.id,
    title:this.title,
    body:this.body
  };
  this.service.addPost(dataInsert).subscribe(res => {
    alert(res.toString());
  });
}
  
  
//navigation the page!

     goToAddPost(): void {
    const addPostRoute: string[] = ['../add-post'];
    this.router.navigate(addPostRoute)
  }}








