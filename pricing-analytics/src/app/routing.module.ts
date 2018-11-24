import { NgModule } from "@angular/core";
import { RouterModule, Route } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";



const ROUTES: Route[] = [{ path: '', component: HomeComponent },
{ path: 'home', component: ContactComponent }
];

//route gaurds
// canActivate, canDeactivate, canLoad, canActivateChild, resolve

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  providers: [],
  exports: [RouterModule]
})
export class RoutingModule { }