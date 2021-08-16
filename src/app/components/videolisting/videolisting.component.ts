import { Component, Input, OnInit } from '@angular/core';
import Video from 'src/app/models/Video';

@Component({
  selector: 'app-videolisting',
  templateUrl: './videolisting.component.html',
  styleUrls: ['./videolisting.component.css']
})
export class VideolistingComponent implements OnInit {
  
  @Input() VideoList:Video[] = []

  constructor() {
   }

  ngOnInit(): void {
  }



}
