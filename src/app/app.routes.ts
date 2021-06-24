import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    {
      path: 'pages',
      loadChildren: () =>
      import('./pages/pages.module').then( m => m.PagesModule)
    },
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'pages'
    }
]
