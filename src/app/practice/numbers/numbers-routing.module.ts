import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumbersPage } from './numbers.page';

const routes: Routes = [
  {
    path: '',
    component: NumbersPage
  },
  {
    path: 'tab3',
    loadChildren: () => import('../../tab3/tab3.module').then(m => m.Tab3PageModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumbersPageRoutingModule {}
