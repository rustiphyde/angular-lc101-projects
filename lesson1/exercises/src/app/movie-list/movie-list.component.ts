import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Ready Player One', 'Antman and the Wasp', 'Spiderman: Homecoming', 'Spiderman: Far From Home'];

   constructor() { }

   ngOnInit() {
   }

}
