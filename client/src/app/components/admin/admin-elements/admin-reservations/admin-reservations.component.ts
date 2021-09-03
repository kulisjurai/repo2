import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/shared/services/common/data.service';
import { ReservationService } from 'src/app/shared/services/reservation/reservation.service';

@Component({
  selector: 'app-admin-reservations',
  templateUrl: './admin-reservations.component.html',
  styleUrls: ['./admin-reservations.component.scss'],
})
export class AdminReservationsComponent implements OnInit {
  allReservations: any[] = [];

  constructor(
    private reservationService: ReservationService,
    private toastrService: ToastrService,
    private data: DataService
  ) {}

  ngOnInit(): void {
    this.getAllReservations();
    this.reservationService.getAllReservations();
    this.reservationService.countReservations();
    console.log(this.allReservations);
  }

  getAllReservations() {
    this.reservationService.getAllReservations().subscribe((response: any) => {
      this.allReservations = response;
      console.log(
        'getAllUsers fuction prints arrayofREservations',
        this.allReservations
      );
    });
  }

  deleteReservation(id: any) {
    this.reservationService.deleteReservation(id).subscribe((respone) => {
      this.toastrService.warning('Rezervacija je izbrisana');
      this.getAllReservations();
      this.reservationService.countReservations();
    });
  }

  cancelReservation(id: any) {
    this.reservationService.cancelReservation(id).subscribe((respone) => {
      this.toastrService.warning('Rezervacija je otkazana');
      this.getAllReservations();
    });
  }

  restoreReservation(id: any) {
    this.reservationService.restoreReservation(id).subscribe((respone) => {
      this.toastrService.success('Rezervacija je vraćena');
      this.getAllReservations();
    });
  }

  check() {
    console.log('check', this.allReservations);
  }
}
