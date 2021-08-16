import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { VideoDataService } from 'src/app/video.service';

@Component({
  selector: 'app-playlistpage',
  templateUrl: './playlistpage.component.html',
  styleUrls: ['./playlistpage.component.css']
})
export class PlaylistpageComponent implements OnInit {
  myplaylist:Video[] = []
  videoSub = new Subscription
  constructor(private v:VideoDataService) { }

  ngOnInit(): void {
    this.videoSub = this.v.VideoObservable.subscribe(
      (dataFromObservable)=>{
        this.myplaylist = dataFromObservable
      }
    )

  }
  EmptyArray=()=>{
    this.myplaylist = []
    this.v.emptyPlaylist()
  }
  ngOnDestroy(){
    this.videoSub.unsubscribe();
  }
}
