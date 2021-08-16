import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Video from './models/Video';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {
  videoArray:Video[]=[]
  baseUrl: string = 'https://api.dailymotion.com/videos?fields=id%2Cthumbnail_360_url%2Ccreated_time%2Cviews_total%2Ctitle%2Cowner.username%2cowner.avatar_80_url&search=';
  VideoObservable = new BehaviorSubject<Video[]>([])
  constructor(private _http: HttpClient) { }
  search(queryString: string) {
        let _URL = this.baseUrl + queryString;
        return this._http.get<Video[]>(_URL);
        
    }
  setVideoList(vidList:Video[]){
    this.videoArray = vidList;
    this.VideoObservable.next(this.videoArray)
  }
}
