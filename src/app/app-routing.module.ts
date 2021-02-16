import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PlayComponent } from './Components/play/play.component';
import { PlaylistComponent } from './Components/playlist/playlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'play/:id', component: PlayComponent },
  { path: 'playlist', component: PlaylistComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
