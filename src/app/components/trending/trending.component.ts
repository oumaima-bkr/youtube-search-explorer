import { Component, OnInit } from "@angular/core";
import { Video } from "src/app/model/video";
import { ServiceTrending } from "src/app/services/serviceTrending";



@Component({
    selector:'app-trending',
    templateUrl:"trending.component.html",
    styleUrls:["trending.component.css"]
})


export class TrendingVideos implements OnInit{

  
   
    listOfVideos!:Video[]
    constructor(private serviceTrending :ServiceTrending){

    }

    


    ngOnInit(): void {
         this.serviceTrending.getTrendingVideo().subscribe(
             (response)=>{
                 this.listOfVideos=response
             }
         )
    }


    


}