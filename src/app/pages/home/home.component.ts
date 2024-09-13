import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService:MovieApiServiceService) { }

  bannerResult : any = [];
  trendingMoviesD : any = [];
  actionMovieResult : any = [];
  adventureMovieResult : any = [];
  animationMovieResult : any = [];
  comedyMovieResult : any = [];
  sciencefictionMovieResult : any = [];
  thrillerMovieResult : any = [];

  ngOnInit(): void {
    this.getMovieData();
    this.trendingMovies();
    this.actionMovies();
    this.comedyMovies();
    this.animationMovies();
    this.adventureMovies();
    this.getScienceFictionMovies();
    this.getThrillerMovies();
  }

  getMovieData() {
    this.movieService.bannerapiData().subscribe((res)=>{
      this.bannerResult = res.results;
    })
  }

  trendingMovies() {
    this.movieService.trendingMovieApiData().subscribe((res)=>{
      this.trendingMoviesD = res.results;
      console.log("So the Trending Movies be like : ",res)
    })
  }

  actionMovies(){
    this.movieService.fetchActionMovies().subscribe((res)=>{
      this.actionMovieResult = res.results;
      console.log("SO the Action Movies be like : ",res)
    })
  }

  animationMovies(){
    this.movieService.fetchAnimationMovies().subscribe((res)=>{
      this.animationMovieResult = res.results;
      console.log("SO the Animation Movies be like : ",res)
    })
  }

  comedyMovies(){
    this.movieService.fetchComedyMovies().subscribe((res)=>{
      this.comedyMovieResult = res.results;
      console.log("SO the Comedy Movies be like : ",res)
    })
  }

  adventureMovies(){
    this.movieService.fetchAdventureMovies().subscribe((res)=>{
      this.adventureMovieResult = res.results;
      console.log("SO the adventure Movies be like : ",res)
    })
  }

  getScienceFictionMovies() {
    this.movieService.fetchAdventureMovies().subscribe((res)=>{
      this.sciencefictionMovieResult = res.results;
      console.log("SO the science-f Movies be like : ",res)
    })
  }

  getThrillerMovies() {
    this.movieService.fetchThrillerMovies().subscribe((res)=>{
      this.thrillerMovieResult = res.results;
      console.log("SO the science-f Movies be like : ",res)
    })
  }







}
