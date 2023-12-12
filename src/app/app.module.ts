import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { VideoList } from './components/video-List/video-list.component';
import { SearchService } from './services/searchService';
import { SearchComponent } from './components/search/search.component';
import { TrendingVideos } from './components/trending/trending.component';
import { ServiceTrending } from './services/serviceTrending';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    VideoList,
    TrendingVideos
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    
    
  ],
  providers: [SearchService,
               ServiceTrending,
              {provide: 'apiKey' ,useValue :"YOUR_KEY"},
              {provide: 'apiUrl' ,useValue :"https://www.googleapis.com/youtube/v3/search"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
