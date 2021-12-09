import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './image/image.component';

import { PracticeComponent } from './practice.component';

const routes: Routes = [
  { path: '', component: PracticeComponent, children:[
    {path:'uploadImage', component:ImageComponent}
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PracticeRoutingModule { }
