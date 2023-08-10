import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1Page } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page,
  },
  {
    path: 'alphabet',
    loadChildren: () => import('../learn/alphabets/alphabets.module').then(m => m.AlphabetsPageModule)
  },
  {
    path: 'numbers',
    loadChildren: () => import('../learn/numbers/numbers.module').then(m => m.NumbersPageModule)
  },
  {
    path: 'colors',
    loadChildren: () => import('../learn/colors/colors.module').then(m => m.ColorsPageModule)
  },
  {
    path: 'shapes',
    loadChildren: () => import('../learn/shapes/shapes.module').then(m => m.ShapesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
