import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { HomeComponent } from "./home/home.component";
import { RoutingModule } from "./routing.module";
import { ContactComponent } from "./contact/contact.component";
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent,FooterComponent,HomeComponent,ContactComponent
  ],
  imports: [
    BrowserModule,RoutingModule,TabsModule.forRoot(),FormsModule, ReactiveFormsModule,ChartsModule,AgmCoreModule.forRoot({
      apiKey: "AIzaSyCYnEzSXQxdBvnDUFAyyJWmNdVHCb8t8PE",
      libraries: ["places"]
    })
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
