import { Component,HostListener, OnInit } from '@angular/core';
import { MovieApiServiceService } from './service/movie-api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'nstream';
  navbg:any;

  constructor(private movieService:MovieApiServiceService){}

  @HostListener('document:scroll') scrollover() {
    console.log(document.body.scrollTop,'scrolllength#')
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop >0)
    {
      this.navbg = {
        'background-color':'#000000'
      }
    }
    else{ 
      this.navbg = {

      }
    }
  }

  

  ngOnInit(): void {
  }
}

