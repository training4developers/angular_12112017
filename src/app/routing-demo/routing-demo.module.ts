import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routingDemoRoutes = [
  { path: 'home', component: HomeComponent,
  // children: [

  // ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routingDemoRoutes),
  ],
  declarations: [HomeComponent]
})
export class RoutingDemoModule { }
