import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './myaadhar/myaadhar.service';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { MyaadharComponent } from './myaadhar/myaadhar.component';
import { Myaadhar2Component } from './myaadhar2/myaadhar2.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'user', component: UserComponent },
  { path: 'myaadhar', component: MyaadharComponent },
  { path: 'myaadhar2', component: Myaadhar2Component },


];

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    MyaadharComponent,
    Myaadhar2Component,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
