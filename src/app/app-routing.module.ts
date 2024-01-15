import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './student/footer/footer.component';
import { HeaderComponent } from './student/header/header.component';
import { registerLocaleData } from '@angular/common';
import { RegistrationComponent } from './student/registration/registration.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { AddStudentComponent } from './student/add-student/add-student.component';



const routes: Routes = [
  { path: 'app-component', component: AppComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'Registration', component: RegistrationComponent },
  { path: 'student-list', component: StudentListComponent },
  { path: 'add-student', component: AddStudentComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
