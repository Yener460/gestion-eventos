import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { ListadoComponent } from './listado/listado.component';
import { CrearEventoComponent } from './crear-evento/crear-evento.component';
import { EditarEventoComponent } from './editar-evento/editar-evento.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'listado', component: ListadoComponent },
  { path: 'crear-evento', component: CrearEventoComponent },
  { path: 'editar-evento/:id', component: EditarEventoComponent },
  { path: '**', redirectTo: 'login' },
];



