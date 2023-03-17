import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducationComponent } from './componentes/educacion/editeducation.component';
import { NeweducationComponent } from './componentes/educacion/neweducation.component';
import { CargarImagenComponent } from './componentes/encabezado/cargar-imagen.component';
import { EditAcercaDeComponent } from './componentes/encabezado/edit-acerca-de.component';
import { EditExperienciaComponent } from './componentes/exp-lab/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/exp-lab/new-experiencia.component';
import { EditSkillComponent } from './componentes/graficos/edit-skill.component';
import { NewSkillComponent } from './componentes/graficos/new-skill.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { EditproyectoComponent } from './componentes/proyectos/editproyecto.component';
import { NewproyectoComponent } from './componentes/proyectos/newproyecto.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevaexp', component: NewExperienciaComponent},
  {path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NeweducationComponent},
  {path: 'editedu/:id', component: EditeducationComponent},
  {path: 'nuevoproy', component: NewproyectoComponent},
  {path: 'editproy/:id', component: EditproyectoComponent},
  {path: 'newskill', component: NewSkillComponent},
  {path: 'edithys/:id', component: EditSkillComponent},
  {path: 'editacercade/:id', component: EditAcercaDeComponent},
  {path: 'newcrear', component: CargarImagenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
