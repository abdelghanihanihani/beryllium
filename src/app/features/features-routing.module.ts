import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FeaturesComponent} from "./features.component";

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [

      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      // {
      //   path: '**',
      //   redirectTo: 'home',
      // },
      {
        path: 'home',
        loadChildren: async () =>
          (await import('./home/home.module')).HomeModule,
      },
      {
        path: 'about',
        loadChildren: async () =>
          (await import('./about/about.module')).AboutModule,
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
}
