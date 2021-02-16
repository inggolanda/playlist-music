import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  baseUrl = "https://api.napster.com/v2.0/tracks/";
  baseUrl1 = "https://api.napster.com/v2.0/playlists?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm";
  play = "http://api.napster.com/v2.0/tracks/Tra.533503638?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4";

  constructor(private httpClient: HttpClient) { }

  onGet() {
    return this.httpClient.get(this.baseUrl+'top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm')
    
      .pipe(
      map((response: Response) => response),
      catchError(this.handleError)
    )
  }

  onPlay(param){
    return this.httpClient.get(this.baseUrl+param+'?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4')
  }

  private handleError(error) {
    console.log(error)
    return throwError(error);
  }
}
