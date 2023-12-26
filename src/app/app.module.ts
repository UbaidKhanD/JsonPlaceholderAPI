import { EventEmitter, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiIntegrationService } from './apiintegration.service';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomeDataPipe } from './custome-data.pipe';
import { Pipe } from '@angular/core';
import { pipe } from 'rxjs';
import { MathCalculationPipe } from './math-calculation.pipe';
import { User } from './user';
import { Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomValidateComponent } from './custom-validate/custom-validate.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ListPostComponent,
    CustomValidateComponent,
    HomeComponent,
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],

  providers: [ApiIntegrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
