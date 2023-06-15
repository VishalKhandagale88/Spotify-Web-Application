import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainBodyComponent } from './main-body/main-body.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RegistraionFormComponent } from './registraion-form/registraion-form.component';
import { LoginFromComponent } from './login-from/login-from.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreatePlaylistComponent } from './create-playlist/create-playlist.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ViewPlaylistComponent } from './view-playlist/view-playlist.component';
import { ViewsingleplaylistComponent } from './viewsingleplaylist/viewsingleplaylist.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogeBoxComponent } from './dialoge-box/dialoge-box.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    MainBodyComponent,
    RegistraionFormComponent,
    LoginFromComponent,
    CreatePlaylistComponent,
    HomePageComponent,
    ViewPlaylistComponent,
    ViewsingleplaylistComponent,
    DialogeBoxComponent,
    PageNotfoundComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTooltipModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
