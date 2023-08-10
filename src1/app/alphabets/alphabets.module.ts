import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlphabetsPageRoutingModule } from './alphabets-routing.module';

import { AlphabetsPage } from './alphabets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlphabetsPageRoutingModule
  ],
  declarations: [AlphabetsPage]
})
export class AlphabetsPageModule {}
