import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { FooterComponent } from './student/footer/footer.component';
import { HeaderComponent } from './student/header/header.component';
import { SidebarComponent } from './student/sidebar/sidebar.component';





const routes: Routes = [
  { path: 'app-component', component: AppComponent },
  {path: 'header', component:HeaderComponent},
  {path:'footer', component:FooterComponent},
  {path:'side-bar', component:SidebarComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
