import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/homepage/homepage.component';
import { PlaylistpageComponent } from './components/playlistpage/playlistpage.component';

const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"MyPlaylist", component:PlaylistpageComponent},
  {path:"**", component:HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }