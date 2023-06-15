import { Component, NgModule } from '@angular/core';
import { createApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginFromComponent } from './login-from/login-from.component';
import { RegistraionFormComponent } from './registraion-form/registraion-form.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';
import { ViewsingleplaylistComponent } from './viewsingleplaylist/viewsingleplaylist.component';
import { NgStyle } from '@angular/common';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';

const routes: Routes = [
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"singlePlaylist/:name",
    component:ViewsingleplaylistComponent
  },
  {
    path:"register",
    component:RegistraionFormComponent,
  },
  {
    path:"viewPlaylist/:name",
    component:ViewPlaylistComponent
  },
  {
    path:"login",
    component:LoginFromComponent,

  },
  {
    path:"createPlaylist",
    component:CreatePlaylistComponent
  },
  {
    path:"viewPlaylist",
    component:ViewPlaylistComponent
  },{
    path:"**",
    component:PageNotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
