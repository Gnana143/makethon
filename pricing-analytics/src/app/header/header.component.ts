import { Component } from "@angular/core";
@Component({
  selector: 'app-header',
  template: `<header class="container-fluid bg-primary">
   <nav class="navbar navbar-expand-lg" >
   <h3 class="navbar-brand mx-auto" >Makethon-2018-HYD-ALPHA TEAM</h3><br>
     <ul class="navbar-nav">
       <li class="nav-item"><a class="nav-link" routerLink="/">Home</a></li>
       <li class="nav-item"><a class="nav-link" routerLink="/about">About</a></li>
     </ul>
   </nav>
 </header>`

})
export class HeaderComponent {

  isAuthenticated: boolean;

  constructor() {
  }

}