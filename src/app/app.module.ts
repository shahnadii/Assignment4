import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/homepage/homepage.component';
import { PlaylistpageComponent } from './components/playlistpage/playlistpage.component';
import { VideoDataService } from './video.service';
import { VideolistingComponent } from './components/videolisting/videolisting.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { VideoComponent } from './components/video/video.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PlaylistpageComponent,
    VideolistingComponent,
    NavigationComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VideoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }