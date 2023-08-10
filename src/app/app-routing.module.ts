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
    path: 'colors',
    loadChildren: () => import('./learn/colors/colors.module').then( m => m.ColorsPageModule)
  },
  {
    path: 'shapes',
    loadChildren: () => import('./learn/shapes/shapes.module').then( m => m.ShapesPageModule)
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
    path: 'colors',
    loadChildren: () => import('./practice/colors/colors.module').then( m => m.ColorsPageModule)
  },
  {
    path: 'shapes',
    loadChildren: () => import('./practice/shapes/shapes.module').then( m => m.ShapesPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
