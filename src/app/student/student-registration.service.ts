import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {
  readonly studentRegistration = 'http://localhost:4502/student/'

  constructor(private studentHttp: HttpClient) { }

  getStudentList() {
    const studentList = this.studentHttp.get('http://localhost:4502/student/');
    console.log(studentList, 'student list')
    return studentList
  }


  addStudent(studt: any) {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.studentHttp.post(this.studentRegistration, 'student/addStudent', studt), httpOptions


  }

}

