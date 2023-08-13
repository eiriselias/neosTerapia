import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { HomeComponent } from './components/home/home.component';
import { MisionComponent } from './components/mision/mision.component';
import { VisionComponent } from './components/vision/vision.component';
import { FisioterapiaComponent } from './components/fisioterapia/fisioterapia.component';
import { TerapiaOcupacionalComponent } from './components/terapia-ocupacional/terapia-ocupacional.component';
import { FonoaudiologiaComponent } from './components/fonoaudiologia/fonoaudiologia.component';
import { TerapiaRespiratoriaComponent } from './components/terapia-respiratoria/terapia-respiratoria.component';
import { ContactosComponent } from './components/contactos/contactos.component';
import { FormsModule } from '@angular/forms';
import { RecomendacionesComponent } from './components/recomendaciones/recomendaciones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    HomeComponent,
    MisionComponent,
    VisionComponent,
    FisioterapiaComponent,
    TerapiaOcupacionalComponent,
    FonoaudiologiaComponent,
    TerapiaRespiratoriaComponent,
    ContactosComponent,
    RecomendacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
