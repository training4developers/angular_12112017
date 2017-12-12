import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ParentComponent, ChildComponent],
  exports: [ParentComponent],
})
export class DemoToolModule { }
