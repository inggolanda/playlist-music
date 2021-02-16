import { Component, OnInit } from '@angular/core';
import { PlaylistService } from "../../Service/playlist.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private playlistService : PlaylistService, private activatedRoute : ActivatedRoute, private route : Router ) { }

  playlist:any;



  ngOnInit(): void {
    this.playlistService.onGet().subscribe( data => {
      this.playlist = data['tracks'];
      console.log(this.playlist);
    })
  }


}
