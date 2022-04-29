import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';

import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
// import { LoginComponent } from './components/login/login.component';

// import { AuthGuard } from './services/user.service';
import { ManagersComponent } from './components/managers/managers.component';
import { ManagerDetailComponent } from './components/manager-detail/manager-detail.component';
import { DemandsComponent } from './components/demands/demands.component';


const routes: Routes = [
  // { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent}, //, canActivate: [AuthGuard] },
  { path: 'albums', component: AlbumsComponent }, //, canActivate: [AuthGuard] },
  { path: 'albums/:pk', component: AlbumDetailComponent }, //, canActivate: [AuthGuard] },
  { path: 'managers', component: ManagersComponent }, //, canActivate: [AuthGuard] },
  { path: 'managers/:pk', component: ManagerDetailComponent }, //, canActivate: [AuthGuard] },
  { path: 'demands', component: DemandsComponent }, //, canActivate: [AuthGuard] },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }