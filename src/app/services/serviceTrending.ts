import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Video } from "../model/video";



@Injectable()


export class ServiceTrending{


    constructor(@Inject('apiUrl') private apiUrl:string,
                @Inject('apiKey') private apiKey:string,
                private http:HttpClient){

    }


    getTrendingVideo(): Observable<Video[]> {
        return this.http.get(`${this.apiUrl}?part=snippet&chart=mostPopular&regionCode=MA&maxResults=40&key=${this.apiKey}`).pipe(
          map((response: any) => {
            return response.items
              .filter((item: any) => item.id.videoId !== undefined)
              .map((item: any) => {
                const snippet = item.snippet || {};
                const statistics = item.statistics || {};
                return new Video(
                  item.id.videoId,
                  snippet.title || 'Title not available',
                  snippet.thumbnails?.high?.url || 'Thumbnail URL not available',
                  `https://www.youtube.com/watch?v=${item.id.videoId}`,
                  statistics.likeCount || 0,
                  statistics.dislikeCount || 0,
                  snippet.channelTitle
                );
              });
          })
        );
      }
      


}