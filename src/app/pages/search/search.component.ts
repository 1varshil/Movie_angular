import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movieService:MovieApiServiceService) { }

  ngOnInit(): void {
  }

  getSearchedMovie:any;
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  })

  submitForm()
  {
    console.log(this.searchForm.value);
    const movieName = this.searchForm.value.movieName;
    console.log('data that is passed in function:',movieName)
    if(movieName)
    {
      this.GetMovie(movieName);
    }
  }

  GetMovie(data:string) {
    let searchedMovie = data.toLowerCase()
    this.movieService.getSearchMovie(searchedMovie).subscribe((res)=>{
      this.getSearchedMovie = res.results;
      console.log('So the Searched Movie:',res.results);
    });
  }
}
