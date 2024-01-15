import { Component, OnInit } from '@angular/core';
import { StudentRegistrationService } from '../student-registration.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private service:StudentRegistrationService){}


  ngOnInit(){
 this.refreshStudent();
  }
  refreshStudent() {
    throw new Error('Method not implemented.');
  }

}
