import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes, CanActivate } from '@angular/router';

// import { ColorToolModule } from './color-tool/color-tool.module';
import { E2eDemoModule } from './e2e-demo/e2e-demo.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

// class AuthorizedGuard implements CanActivate {
//   canActivate() {
//     return false;
//   }
// }

// const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'contact', component: ContactComponent, canActivate: [ AuthorizedGuard ] },
//   { path: 'about', component: AboutComponent },
//   { path: 'about/:safe', component: AboutComponent },
//   { path: 'routing-demo', loadChildren: 'app/routing-demo/routing-demo.module#RoutingDemoModule' },
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
// ];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule, E2eDemoModule,
    //ColorToolModule,
    // RouterModule.forRoot(appRoutes, { useHash: true }),
  ],
  // providers: [ AuthorizedGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// '^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$'
