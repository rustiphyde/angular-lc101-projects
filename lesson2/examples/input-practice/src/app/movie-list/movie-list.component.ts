import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];

   constructor() { }

   ngOnInit() {
   }

   addMovie(newTitle: string) {
      let message = '';
      if (newTitle === '') {
         message = 'Please enter a movie title.';
      } if (this.movies.includes(newTitle)){
         message = `${newTitle} is already in your movie watchlist.`;
      }
      else {
         this.movies.push(newTitle);
      }
      return message;
   }
}