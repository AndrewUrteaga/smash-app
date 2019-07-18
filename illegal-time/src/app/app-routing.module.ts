import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TvShowsComponent } from './tv-shows/tv-shows.component';


const routes: Routes = [
  {path: "tv-shows", component: TvShowsComponent},

  {path: '', redirectTo: 'tv-shows', pathMatch: 'full'},
  {path: '**', redirectTo: 'tv-shows', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
