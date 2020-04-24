import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';


const routes: Routes = [
  { path : 'reactiveforms', component :ReactiveFormsComponent},
  { path : 'templatedriven', component :TemplatedrivenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
