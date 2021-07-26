import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



//rutas

import { AppComponent } from './app.component';
import { AppRoutingModule } from './components/app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
