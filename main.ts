import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { GridGifsComponent } from '../grid-gifs/grid-gifs.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  data : any[] = []
  constructor(private apiService: ApiService){
    
  }

  

}
