import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {RoomReservation} from '../employee-details/models/RoomReservation';
import {RoomReservationService} from '../services/room-reservation.service';
import {RoomModel} from '../rooms/models/RoomModel';
import {RoomService} from '../services/room.service';
import {EmployeeModel} from '../employees/models/EmployeeModel';
import {InstrumentModel} from '../instruments/models/InstrumentModel';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css'],
})
export class RoomDetailsComponent implements OnInit {
  roomId: number;
  room: RoomModel;
  roomReservationsList: RoomReservation[];

  constructor(
    private route: ActivatedRoute,
    private roomReservationService: RoomReservationService,
    private roomService: RoomService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.roomId = Number(this.route.snapshot.params.id);
    this.roomService.fetchRoom(this.roomId).then((room: RoomModel) => this.room = room)
      .then(() => {

        if (this.room.type === 'SURGERY') {
          this.room.type = 'operacyjna';
        } else if (this.room.type === 'PERIOPERATIVE') {
          this.room.type = 'okołozabiegowa';
        } else if (this.room.type === 'PATIENT') {
          this.room.type = 'chorych';
        } else if (this.room.type === 'MRI') {
          this.room.type = 'MRI';
        } else {
          this.room.type = 'RTG';
        }
      });

    this.resolveRoomReservations();
  }

  resolveRoomReservations() {
    this.roomReservationService.fetchRoomReservationsList()
      .then((list: RoomReservation[]) => this.roomReservationsList = list.filter((reservation) => reservation.roomId === this.roomId));
  }

  onBackClick() {
    this.router.navigate(['rooms']);
  }

  onDeleteEvent(id: number) {
    this.roomReservationService.deleteRoomReservation(id).then(() => this.resolveRoomReservations());
  }


  public getDate(date: Date): string {
    const newDate = new Date(date);
    return newDate.toLocaleDateString();
  }

  public getTime(date: Date): string {
    const newDate = new Date(date);
    return newDate.toLocaleTimeString();
  }
}


