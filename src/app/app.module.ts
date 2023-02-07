import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { HomeComponent } from './components/home/home.component';
import { MisionComponent } from './components/mision/mision.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    HomeComponent,
    MisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
