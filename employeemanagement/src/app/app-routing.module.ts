import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpRegistrationComponent } from './emp-registration/emp-registration.component';





const routes: Routes = [


  {
    path: 'emp',
    component: EmpRegistrationComponent,
      
  },

  
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
