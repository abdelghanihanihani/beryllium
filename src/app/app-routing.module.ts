import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'features', pathMatch: 'full'},

  {
    path: 'features',
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('./features/features.module')).FeaturesModule,
      },
    ],
    data: {
      breadcrumb: ''
    }
  },
] as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
