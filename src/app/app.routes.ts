import { Routes } from '@angular/router';

import { SectionComponent } from './page/section/section.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

export const routes: Routes = [
  { path: 'operation/:id', component: SectionComponent },
  { path: '', component: SectionComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
