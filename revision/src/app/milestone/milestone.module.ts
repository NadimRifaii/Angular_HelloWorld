import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MilestoneComponent } from './milestone/milestone.component';



@NgModule({
  declarations: [
    MilestoneComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MilestoneComponent
  ]
})
export class MilestoneModule { }
