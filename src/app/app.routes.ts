import { Routes } from '@angular/router';
import { LogINComponent } from './login/signin/log-in/log-in.component';
import { SignInComponent } from './login/signin/sign-in/sign-in.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'LogIn', component: LogINComponent },
  { path: 'SignIn', component: SignInComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

