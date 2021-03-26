import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TerapeutaPage } from './terapeuta';

@NgModule({
  declarations: [
    TerapeutaPage,
  ],
  imports: [
    IonicPageModule.forChild(TerapeutaPage),
  ],
})
export class TerapeutaPageModule {}
