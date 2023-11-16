import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiIntegrationService } from './apiintegration.service';
import { AddPostComponent } from './add-post/add-post.component';
import { ListPostComponent } from './list-post/list-post.component';
import{ ReactiveFormsModule,FormsModule} from '@angular/forms';
import { DemoAPI } from './demo-api';

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ListPostComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
  ],
  providers: [ApiIntegrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
