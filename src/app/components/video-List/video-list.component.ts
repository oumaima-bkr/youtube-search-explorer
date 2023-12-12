import { Component, Input } from "@angular/core";
import { Video } from "src/app/model/video";


@Component({
    selector:"app-video-list",
    templateUrl:"video-list.component.html",
    styleUrls:["video-list.component.css"]
})


export class VideoList{
    @Input()video!:Video
}