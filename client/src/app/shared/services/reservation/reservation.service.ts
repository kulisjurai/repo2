import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/User.model';
import { environment } from 'src/environments/environment';
import { DataService } from '../common/data.service';

@Injectable({ providedIn: 'root' })
export class ReservationService {
  constructor(private http: HttpClient, private data: DataService) {}

  createReservationService(reservationBody: any) {
    console.log('reservationBody', reservationBody);
    return this.http.post(
      `${environment.serverUrl}/reservation-create`,
      reservationBody
    );
  }

  getAllReservations() {
    return this.http.get(`${environment.serverUrl}/get-all-reservations`);
  }

  deleteReservation(id: any) {
    console.log('service', id);
    return this.http.put(
      environment.serverUrl + '/reservation-delete/' + parseInt(id),
      { id }
    );
  }

  cancelReservation(id: any) {
    console.log('service', id);
    return this.http.put(
      environment.serverUrl + '/reservation-cancel/' + parseInt(id),
      { id }
    );
  }

  restoreReservation(id: any) {
    console.log('service', id);
    return this.http.put(
      environment.serverUrl + '/reservation-restore/' + parseInt(id),
      { id }
    );
  }

  countReservations() {
    this.http
      .get(environment.serverUrl + '/reservations-count')
      .subscribe((success: any) => {
        this.data.updateReservationsCounter(success.numOfReservations);
        console.log('service', success.numOfReservations);
        return success.numOfReservations;
      });
  }
}
