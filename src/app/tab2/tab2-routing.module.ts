import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'alphabet',
    loadChildren: () => import('../practice/alphabets/alphabets.module').then(m => m.AlphabetsPageModule)
  },
  {
    path: 'numbers',
    loadChildren: () => import('../practice/numbers/numbers.module').then(m => m.NumbersPageModule)
  },
  {
    path: 'colors',
    loadChildren: () => import('../practice/colors/colors.module').then(m => m.ColorsPageModule)
  },
  {
    path: 'shapes',
    loadChildren: () => import('../practice/shapes/shapes.module').then(m => m.ShapesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
