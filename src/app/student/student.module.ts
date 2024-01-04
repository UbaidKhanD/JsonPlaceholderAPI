import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StudentRegistrationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
