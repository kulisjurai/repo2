import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConditionsComponent } from './components/conditions/conditions.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { SearchComponent } from './components/search/search.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './shared/services/validators/authGuard';
import { AdminComponent } from './components/admin/admin.component';
import { AuthGuardAdminService } from './shared/services/validators/authGuardAdmin';

import { DestInformerComponent } from './components/dest-informer/dest-informer.component';
import { ReservationFormularComponent } from './components/reservation-formular/reservation-formular.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'conditions', component: ConditionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'reservations',
    component: ReservationsComponent,
    canActivate: [AuthGuardService],
  },
  { path: 'search', component: SearchComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardAdminService],
  },
  { path: 'full-info', component: DestInformerComponent },
  {
    path: 'reservation-confirmation',
    component: ReservationFormularComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
