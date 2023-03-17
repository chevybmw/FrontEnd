import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { ExpLabComponent } from './componentes/exp-lab/exp-lab.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { GraficosComponent } from './componentes/graficos/graficos.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './componentes/exp-lab/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/exp-lab/edit-experiencia.component';
import { NeweducationComponent } from './componentes/educacion/neweducation.component';
import { EditeducationComponent } from './componentes/educacion/editeducation.component';
import { NewproyectoComponent } from './componentes/proyectos/newproyecto.component';
import { EditproyectoComponent } from './componentes/proyectos/editproyecto.component';
import { EditSkillComponent } from './componentes/graficos/edit-skill.component';
import { NewSkillComponent } from './componentes/graficos/new-skill.component';
import { EditAcercaDeComponent } from './componentes/encabezado/edit-acerca-de.component';
import { CargarImagenComponent } from './componentes/encabezado/cargar-imagen.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ExpLabComponent,
    EducacionComponent,
    GraficosComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducationComponent,
    EditeducationComponent,
    NewproyectoComponent,
    EditproyectoComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent,
    CargarImagenComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgCircleProgressModule.forRoot({
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#ff008c",
      "innerStrokeColor": "#ff008c",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 1000,
      "showUnits": false,
      "showBackground": false,
      "clockwise": true,
      "startFromZero": false,
      "lazy": true}),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())

   ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
