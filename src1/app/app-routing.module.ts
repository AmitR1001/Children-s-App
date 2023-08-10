import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'alphabets',
    loadChildren: () => import('./learn/alphabets/alphabets.module').then( m => m.AlphabetsPageModule)
  },
  {
    path: 'numbers',
    loadChildren: () => import('./learn/numbers/numbers.module').then( m => m.NumbersPageModule)
  },
 
  {
    path: 'alphabets',
    loadChildren: () => import('./practice/alphabets/alphabets.module').then( m => m.AlphabetsPageModule)
  },
  {
    path: 'numbers',
    loadChildren: () => import('./practice/numbers/numbers.module').then( m => m.NumbersPageModule)
  },

  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
