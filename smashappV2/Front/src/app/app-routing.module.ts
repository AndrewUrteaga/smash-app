import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import { PlayersDetailsComponent } from './players/players-details/players-details.component';
import { PlayersDetailsGuard } from './players/players-details/players-details.guard';
// import { AuthGuard } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: 'home' , component: HomeComponent},
  // , canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: PlayersComponent},
  {path: 'search', component: SearchComponent},
  {path: 'users/:id', canActivate: [PlayersDetailsGuard] ,component: PlayersDetailsComponent}, 
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
