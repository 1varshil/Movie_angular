import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,private movieService:MovieApiServiceService) { 

  }

  Movie : any;
  MovieVideo:any ;
  MovieCast:any ;

  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getSearchedMovie(id);
    this.getVideo(id);
    this.getMovieCast(id);
  }


  getSearchedMovie(id:any){
      this.movieService.getMovieDetails(id).subscribe((result)=>{
      this.Movie= result ;
      console.log('searched...',result);
      })
  }

  getVideo(id:any) {
    this.movieService.getMovieVideo(id).subscribe((res)=>{

      res.results.forEach((ele:any) => {
        if(ele.type == "Trailer")
        {
          this.MovieVideo = ele.key;
          console.log('video be like :',this.MovieVideo)
        }
      });
    })
  }


  getMovieCast(id:any)
  {
    this.movieService.getMovieCast(id).subscribe((res)=>{
      console.log('CAST of the Movie be Like: ',res);
      this.MovieCast = res.cast;
    })
  }

}
