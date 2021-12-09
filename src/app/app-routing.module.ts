import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './Basic/login.guard';
import { ProfileComponent } from './profile/profile.component';
import { AllDealsComponent } from './all-deals/all-deals.component';
import { PlannedTripsComponent } from './planned-trips/planned-trips.component';
import { LogoutGuard } from './Basic/logout.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule), canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [LoginGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [LogoutGuard] },
  { path: 'all-deals', component: AllDealsComponent },
  { path: 'planned-trips', component: PlannedTripsComponent, canActivate: [LogoutGuard] },
  {path: 'all-deals/:searchBy', component: AllDealsComponent},
  { path: 'corona-status', loadChildren: () => import('./practice/practice/practice.module').then(m => m.PracticeModule) },
  { path: '**', redirectTo: 'home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
