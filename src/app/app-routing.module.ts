import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [//pathmach yazmasak da olur versiyonla ilgili 
 {path:"", pathMatch:"full", component:ProductComponent}, //  4200 gelirse de bu componenti ver
 {path:"products", component:ProductComponent}, // 4200/product gelirse bu componenti ver
 {path:"products/category/:categoryId", component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
