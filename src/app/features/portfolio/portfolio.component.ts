import {Component, OnInit} from '@angular/core';
import SwiperCore, {Pagination} from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  slidesStore: any = [
    {
      id: 1,
      title: 'New York Arena',
      location: 'New York',
      img: './assets/images/img_1.jpg',
      alt: 'New York Arena',
    },
    {
      id: 2,
      title: 'Eagle Park',
      location: 'London',
      img: './assets/images/img_2.jpg',
      alt: 'Eagle Park',
    },
    {
      id: 3,
      title: 'Nationals Park',
      location: 'Paris, France',
      img: './assets/images/img_3.jpg',
      alt: 'Nationals Park',
    }, {
      id: 4,
      title: 'New York Arena',
      location: 'New York',
      img: './assets/images/img_1.jpg',
      alt: 'New York Arena',
    }, {
      id: 5,
      title: 'Eagle Park',
      location: 'London',
      img: './assets/images/img_2.jpg',
      alt: 'Eagle Park',
    },
    {
      id: 6,
      title: 'Nationals Park',
      location: 'Paris, France',
      img: './assets/images/img_3.jpg',
      alt: 'Nationals Park',
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
