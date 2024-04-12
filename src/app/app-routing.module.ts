import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { MedicineComponent } from './component/medicine/medicine.component';
import { ProductByCatagoryComponent } from './component/product-by-catagory/product-by-catagory.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login', component :LoginComponent },
  {path:'medicine',component:MedicineComponent},
  {path:'otcCatagory',component:ProductByCatagoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
