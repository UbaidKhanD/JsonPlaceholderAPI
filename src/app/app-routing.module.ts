import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { CustomValidateComponent } from './custom-validate/custom-validate.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';




const routes: Routes = [
  {path:'app-component', component:AppComponent},
  { path: 'add-post', component: AddPostComponent },
  { path: 'list-post', component: ListPostComponent },
  {path:'custome-validation', component:CustomValidateComponent},
  {path:'home', component:HomeComponent},
  {path:'footer', component:FooterComponent},
  {path:'header', component:HeaderComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
