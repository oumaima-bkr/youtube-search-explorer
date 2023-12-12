// search.component.ts
import { Component } from "@angular/core";
import { forkJoin, Observable } from 'rxjs';
import { Video } from "src/app/model/video";
import { SearchService } from "src/app/services/searchService";

@Component({
  selector: "search-app",
  templateUrl: "search.component.html",
  styleUrls: ["search.component.css"]
})
export class SearchComponent {
  beShowen: boolean = false
  listOfResults: Video[] = [
    new Video(
        1,
      "productive school vlog: mid sem test, library, cute cafe, stress procrastinating & more",
      "https://img.youtube.com/vi/RKrU3R_mc0g/hqdefault.jpg",
      "https://www.youtube.com/watch?v=RKrU3R_mc0g&ab_channel=alyainsyirah",
      100, 
      5, 
      "Nom de la chaîne 1"
    )
  ];
  valueInserted: string = '';

  constructor(private service: SearchService) { }

  search() {
    this.beShowen = true
    const value = this.valueInserted.trim();
    const replacedValue = encodeURIComponent(value);;
    this.service.search(replacedValue).subscribe(
      (response: number[]) => {
        console.log(response)
        const observables: Observable<Video>[] = response.map(id => this.service.getVideoDetails(id));
        forkJoin(observables).subscribe(
          (videoDetails) => {
            this.listOfResults = videoDetails;
          },
          (error) => {
            console.error(error);
          }
        );
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getVideoDetails(id: number) {
    this.service.getVideoDetails(id).subscribe(
      (response) => {
        this.listOfResults.push(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
