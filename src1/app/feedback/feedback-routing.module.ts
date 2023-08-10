import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FeedbackPage } from './feedback.page';

const routes: Routes = [
  {
    path: '',
    component: FeedbackPage
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
  exports: [RouterModule],
})
export class FeedbackPageRoutingModule {}
