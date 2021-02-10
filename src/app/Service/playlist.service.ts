import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  baseUrl = "https://api.napster.com/v2.0/playlists?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
  img = "https://api.napster.com/";
  play ="https://api.napster.com/v2.0/playlists/";

  constructor(private httpClient: HttpClient) { }

  onGet() {
    return this.httpClient.get(this.baseUrl)
    
      .pipe(
      map((response: Response) => response),
      catchError(this.handleError)
    )
  }

  onImg(param) {
    return this.httpClient.get(this.img+'imageserver/v2/albums/'+param+'/images/300x300.jpg')
    
      .pipe(
      map((response: Response) => response),
      catchError(this.handleError)
    )
  }

  onPlay(param){
    return this.httpClient.get(this.play+param+'/tracks?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm')
  }

  private handleError(error) {
    console.log(error)
    return throwError(error);
  }
}
