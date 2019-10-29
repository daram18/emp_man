import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from "@angular/common/http";
import { EmployeeService } from './shared/employee.service';


@NgModule({
  declarations: [
    AppComponent,
    EmpRegistrationComponent, 
    EmpListComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'emp', component: EmpRegistrationComponent},
      { path: 'list', component: EmpListComponent },
    ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
