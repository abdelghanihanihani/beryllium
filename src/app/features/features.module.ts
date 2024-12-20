import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FeaturesRoutingModule} from './features-routing.module';
import {FeaturesComponent} from './features.component';
import {CoreModule} from "../core/core.module";


@NgModule({
  declarations: [
    FeaturesComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    CoreModule

  ],
  exports: [FeaturesComponent]
})
export class FeaturesModule {
}
