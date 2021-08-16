import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import Video from 'src/app/models/Video';
import { VideoDataService } from 'src/app/video.service';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input() video:Video = {} as Video
  @Input() isPlaylistMember:boolean = false
  ifClicked:boolean = false
  buttontext:string = "Add to Playlist"
  VideoList:Video[] = []
  VideoSub = new Subscription()

  constructor(private v:VideoDataService) {}
  
  AddToPlaylist(){
      this.v.addVideo(this.video)
      this.ifClicked = true;
      if(this.ifClicked==true){
        this.buttontext = "Already Added"
      }
  }
  ngOnInit(): void {
    this.VideoSub = this.v.VideoObservable.subscribe(
      (dataList)=>{
        this.VideoList=dataList
      }
    )
    for(let i = 0; i< this.VideoList.length; i++){
      if(this.video.id===this.VideoList[i].id){
        this.ifClicked=true
      }
    }
    if(this.ifClicked==true){
      this.buttontext = "Already Added"
    }
  }

}
