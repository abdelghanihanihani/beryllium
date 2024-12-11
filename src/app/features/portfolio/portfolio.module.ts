import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import {SwiperModule} from "swiper/angular";


@NgModule({
  declarations: [
    PortfolioComponent
  ],
    imports: [
        CommonModule,
        PortfolioRoutingModule,
        SwiperModule
    ]
})
export class PortfolioModule { }
