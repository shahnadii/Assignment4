import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject, from, Observable, Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { UserservicesService } from 'src/app/userservices.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePageComponent implements OnInit {



  //variables
  @Input() currVid:Video = {} as Video
  ObservableVideo = new BehaviorSubject<Video[]>([]);

  results: Video[]=[];
  searchString:string =""
  queryField: Subscription = new Subscription();

  
  //methods
  SearchButton(){
    this.queryField = this._videoService.search(this.searchString)
    .subscribe((dataFromList:any)=> {this.results = dataFromList["list"]})
    this._videoService.setVideoList(this.results);
  }

  constructor(
    private _videoService:UserservicesService
    ) { }
  
  
  onKey = (event:any) => {
    this.searchString = event.target.value
    }
  
  ngOnInit(): void {
    }
    
}