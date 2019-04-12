import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmbedVideo } from 'ngx-embed-video'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { PlayersDetailsComponent } from './players/players-details/players-details.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    NavBarComponent,
    HomeComponent,
    PlayersDetailsComponent,
    LoginComponent,
    SearchComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    EmbedVideo.forRoot(),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
