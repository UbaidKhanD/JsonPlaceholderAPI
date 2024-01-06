import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StudentRegistrationComponent } from './student-registration/student-registration.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    StudentRegistrationComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentModule { }
