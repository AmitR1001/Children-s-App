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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
