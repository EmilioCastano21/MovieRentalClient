import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './service/movie.service';
import { HomepageComponent } from './homepage/homepage.component';
import { CreatemovieComponent } from './createmovie/createmovie.component';
import { ViewmoviesComponent } from './viewmovies/viewmovies.component';
import { CreateuserComponent } from './createuser/createuser.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CreatemovieComponent,
    ViewmoviesComponent,
    CreateuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
