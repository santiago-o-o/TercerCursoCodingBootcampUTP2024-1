import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-grid-gifs',
  templateUrl: './grid-gifs.component.html',
  styleUrls: ['./grid-gifs.component.css']
})
export class GridGifsComponent implements OnInit{

  gifs: any[] = []

  constructor(private apiService: ApiService, private sanitizer: DomSanitizer){
  }
  ngOnInit(): void {
      this.gifs = this.apiService.gifs;
  }

  search(){
    const info : any = document.querySelector("#infoInput") as HTMLInputElement;
    const infoText = info.value;

    this.apiService.searchGifs(infoText).subscribe(
      (res) => {
        this.gifs = res.data.map((gif: { embed_url: string; }) => ({
          embed_url: this.sanitizer.bypassSecurityTrustResourceUrl(gif.embed_url)
        }));
        console.log(this.gifs);
      },
      (error) => {
        console.error('Error fetching gifs:', error);
      }
    );
    
  }

}
