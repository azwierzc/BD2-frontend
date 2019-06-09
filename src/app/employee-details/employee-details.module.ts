import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeDetailsComponent} from './employee-details.component';
import {IntrumentsModule} from '../instruments/intruments.module';
import { RoomReservationComponent } from './room-reservation/room-reservation.component';
import {DlDateTimePickerModule} from 'angular-bootstrap-datetimepicker';
import {FormsModule} from '@angular/forms';
import { InstrumentReservationComponent } from './instrument-reservation/instrument-reservation.component';

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    EmployeeDetailsComponent,
    RoomReservationComponent,
    InstrumentReservationComponent
  ],
  imports: [
    CommonModule,
    IntrumentsModule,
    CommonModule,
    DlDateTimePickerModule,
    FormsModule
  ],
  entryComponents: [
    RoomReservationComponent,
    InstrumentReservationComponent

  ]
})
export class EmployeeDetailsModule { }
