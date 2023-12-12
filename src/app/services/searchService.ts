import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, catchError, map } from "rxjs";
import { Video } from "src/app/model/video";

@Injectable()
export class SearchService {
  constructor(
    private httpClient: HttpClient,
    @Inject("apiKey") private apiKey: string,
    @Inject("apiUrl") private apiUrl: string
  ) {}

  search(value: string): Observable<number[]> {
    const url = `${this.apiUrl}?q=${value}&key=${this.apiKey}`;

    return this.httpClient.get(url).pipe(
      map((response: any) => {
        return response.items.map((item: any) => item.id.videoId)
                .filter((item:any)=>item!==undefined);
      }),
      catchError((error) => {
        console.error(error);
        return [];
      })
    );
  }

  getVideoDetails(videoId: any): Observable<Video> {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${this.apiKey}&part=snippet,statistics`;
  
    return this.httpClient.get(url).pipe(
      map((response: any) => {
        const item = response.items[0];
  
        if (!item) {
           throw new Error('Video details not found.');
        }
  
        const snippet = item.snippet || {};
        const statistics = item.statistics || {};
  
        return new Video(
          item.id,
          snippet.title || 'Title not available',
          snippet.thumbnails?.high?.url || 'Thumbnail URL not available',
          `https://www.youtube.com/watch?v=${item.id}`,
          statistics.likeCount || 0,
          statistics.dislikeCount || 0,
          snippet.channelTitle
        );
      }),
      catchError((error) => {
        console.error(error);
        throw error; 
      })
    );
  }
  
}
