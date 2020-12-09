import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class GiphyService {

  private giphyAPI = 'http://api.giphy.com/v1/gifs/search?api_key=ayNqSSHSGWqd268C82ZToeSGKgW9A224'; 
  private complement = '&limit=24&offset=5&rating=g&lang=en'

  constructor(private http: HttpClient) { } 

  searchGifs(query:string) {    
    return this.http.get(this.giphyAPI + '&q=' + query + this.complement)
  } 

}

  

