import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RoomsComponent} from './rooms.component';
import {RoomItemComponent} from './room-item/room-item.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RoomsComponent,
    RoomItemComponent
  ],
  exports: [
    RoomsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgbAlertModule
  ]
})
export class RoomsModule {
}
