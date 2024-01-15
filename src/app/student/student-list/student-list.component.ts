import { Component, OnInit } from '@angular/core';
import { StudentRegistrationService } from '../student-registration.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent  {
  title='Student List';
  studentData:any;
  constructor(private service:StudentRegistrationService){}
  ngOnInit(){
    this.service.getStudentList().subscribe((res: any)=>{
      this.studentData=res.studentData;

      console.log(this.studentData,'response')
    })
    
  }
}
