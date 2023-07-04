import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageClientPageRoutingModule } from './page-client-routing.module';

import { PageClientPage } from './page-client.page';
// import { Dialogs } from '@ionic-native/dialogs/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageClientPageRoutingModule
  ],
  declarations: [PageClientPage],
  // providers: [
  //   Dialogs
  // ],
})
export class PageClientPageModule {}
