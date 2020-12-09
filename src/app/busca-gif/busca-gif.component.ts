import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../busca-gif/giphy.service'; 


@Component({
  selector: 'app-busca-gif',
  templateUrl: './busca-gif.component.html',
  styleUrls: ['./busca-gif.component.css']
})
export class BuscaGifComponent implements OnInit {
 
  public results: any;  
  public query: string;
  public gifs: Array<any> = []

  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {  }

  buscaGifs(query:string) { 

    this.giphyService
        .searchGifs(query)
        .subscribe(
          (data) => { 
            this.results = data;            
            this.gifs = this.gifs.concat(this.results.data); 
            console.log(this.gifs)
          }
        ) 
    }; 

  search(query:string) { 
    this.query = query;      
    this.buscaGifs(this.query); 
  } 
 
};

