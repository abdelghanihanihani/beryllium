import {Component, OnInit} from '@angular/core';
import SwiperCore, {Pagination, SwiperOptions} from 'swiper';

SwiperCore.use([Pagination]);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  slidesStore: any = [
    {
      id: 1,
      name: 'Jane Simpson',
      img: './assets/images/staff_1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat enim et urna sagittis,\n' +
        '                  rhoncus euismod erat tincidunt. Donec tincidunt volutpat erat.',
      alt: 'Jane Simpson',
      role: 'Architect'
    },
    {
      id: 2,
      name: 'Jane Simpson',
      img: './assets/images/staff_1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat enim et urna sagittis,\n' +
        '                  rhoncus euismod erat tincidunt. Donec tincidunt volutpat erat.',
      alt: 'Jane Simpson',
      role: 'Architect'
    },
    {
      id: 3,
      name: 'Jane Simpson',
      img: './assets/images/staff_1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat enim et urna sagittis,\n' +
        '                  rhoncus euismod erat tincidunt. Donec tincidunt volutpat erat.',
      alt: 'Jane Simpson',
      role: 'Architect'
    },
    {
      id: 4,
      name: 'Jane Simpson',
      img: './assets/images/staff_1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus placerat enim et urna sagittis,\n' +
        '                  rhoncus euismod erat tincidunt. Donec tincidunt volutpat erat.',
      alt: 'Jane Simpson',
      role: 'Architect'
    },

  ];
  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: true,
    pagination: {clickable: true},
    scrollbar: {draggable: true},
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  // @ts-ignore
  onSwiper([swiper]) {
    console.log(swiper);
  }

  onSlideChange() {
    console.log('slide change');
  }
}
