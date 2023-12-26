import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiIntegrationService } from '../apiintegration.service';
import { ReactiveFormsModule,FormsModule,FormGroup } from '@angular/forms';


@Component({
  selector: '/app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})

export class AddPostComponent {
  submitted = false;
  constructor(private service: ApiIntegrationService, private router: Router) { }
  datashow = new FormGroup({
    userid: new FormControl('', [Validators.required, Validators.minLength(2)]),
    id: new FormControl('', [Validators.required, Validators.minLength(2)]),
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    body: new FormControl('', [Validators.required, Validators.minLength(5)])
  })



  addPost() {
    console.log(this.datashow)
    const dataInsert = {
      userid: this.datashow.value.userid,
      id: this.datashow.value.id,
      title: this.datashow.value.title,
      body: this.datashow.value.body
    };
    this.service.addPost(dataInsert).subscribe(res => {
      alert(res.toString());
    });
  }

  //navigation the page!

  goToAddPost(): void {
    const addPostRoute: string[] = ['../add-post'];
    this.router.navigate(addPostRoute)
  }


  get userPost() {
    return this.datashow.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.datashow.valid) {
      alert('Data Save Successfully');
      console.table(this.datashow.value)
    }

  }
}

