import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './list-book/list-book.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes: Routes = [
  {path : "books", component : ListBookComponent},
  {path : "my", component : MycomponentComponent},
  {path : "", redirectTo : "books", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
