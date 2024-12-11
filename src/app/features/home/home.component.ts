import {Component, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  slidesStore: any = [
    {id: 1, title: 'Architecture 1', src: './assets/images/slider_1.jpg', alt: 'Architecture 1'},
    {id: 2, title: 'Architecture 2', src: './assets/images/slider_2.jpg', alt: 'Architecture 2'},
    {id: 3, title: 'Architecture 3', src: './assets/images/slider_3.jpg', alt: 'Architecture 3'},
  ];
  number: any=12000;

  constructor() {
  }

  ngOnInit(): void {
  }

}
