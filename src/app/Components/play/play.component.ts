import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlaylistService } from 'src/app/Service/playlist.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private playlistService : PlaylistService, private route : ActivatedRoute, private router : Router) { }

  id:any;
  music:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(Params =>{
      this.id = Params.get('id');
      console.log(this.id)
    })
    this.ondet();
  }

  ondet(){
    this.playlistService.onPlay(this.id).subscribe(data => {
      this.music = data['tracks'];
      console.log(this.music);
    })
  
  }

}

