import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

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
    // data: {
    //   breadcrumb: ''
    // }
  },
  // {
  //   path: '**',
  //   redirectTo: 'features',
  // }
] as Routes;

@NgModule({
  imports: [RouterModule.forRoot(routes,

    {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
