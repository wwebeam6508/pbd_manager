import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pbd_website',
    pathMatch: 'full'
  },
  { path: 'pbd_website', children:[
      {
        path: '',
        loadChildren: './pbd-website/pbd-website.module#PbdWebsitePageModule'
      },
      {
        path: 'type_job/:id',
        loadChildren: './pbd-website/type-job/type-job.module#TypeJobPageModule' 
      }
    ] 
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
