import { Injectable } from '@angular/core';
import video from './models/Video';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import Video from './models/Video';
@Injectable({
  providedIn: 'root'
})
export class VideoDataService {
  videoArray:Video[]=[]
  baseUrl: string = 'https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=';
  VideoObservable = new BehaviorSubject<video[]>([])
  constructor(private _http: HttpClient) { }
  search(queryString: string) {
        let _URL = this.baseUrl + queryString;
        console.log(this._http.get<Video>(_URL));
        return this._http.get<Video>(_URL);
        
    }
  setVideoList(vidList:Video[]){
    this.videoArray = vidList;
    this.VideoObservable.next(this.videoArray)
  }
  addVideo = (video:Video) =>{
    this.videoArray.push(video)
    this.VideoObservable.next(this.videoArray)
  }
  getPlaylist = () => {
    return this.videoArray
  }
  emptyPlaylist = () =>{
    this.videoArray = []
    this.VideoObservable.next(this.videoArray)      
  }
  
}