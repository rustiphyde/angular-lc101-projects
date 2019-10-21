import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My PNGs';
  image1 = '../../assets/travelers_lantern.png';
  image2 = '../../assets/sandwich-fire-logo.png';

  constructor() { }

  ngOnInit() {
  }

}