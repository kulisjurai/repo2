import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/shared/services/common/data.service';
import { ReservationService } from 'src/app/shared/services/reservation/reservation.service';
import { UserService } from 'src/app/shared/services/user/User.service';

@Component({
  selector: 'reservation-formular',
  templateUrl: './reservation-formular.component.html',
  styleUrls: ['./reservation-formular.component.scss'],
})
export class ReservationFormularComponent implements OnInit {
  destInfo: any;
  images: any[] = [];
  errors: any;
  user: any;

  constructor(
    private data: DataService,
    private userSercive: UserService,
    private reservationService: ReservationService,
    private toastrService: ToastrService,
    private router: Router
  ) {}
  showNavigationIndicators = true;

  ngOnInit(): void {
    this.data.destinationInfo.subscribe((result: any) => {
      this.destInfo = result;
      console.log('ngOnInit formular', this.destInfo);
      if (this.destInfo) {
        this.photoBinder();
      }
    });
    this.user = this.userSercive.getUser();
    console.log('ngOnInit formular', this.user);
  }
  photoBinder() {
    this.images = [];
    for (let item in this.destInfo) {
      if (item.includes('image')) {
        this.images.push(this.destInfo[item]);
      }
    }
  }
  reserveDestination() {
    this.reservationService
      .createReservationService({
        user_id: this.user.user_id,
        destination_id: this.destInfo.dest_id,
        transport_id: this.destInfo.transport_id,
      })
      .subscribe(
        (response: any) => {
          this.toastrService.success(response.msg);
          console.log(response);
        },
        (error: any) => {
          this.errors = error;
          if (this.errors) {
            console.log(this.errors.error.msg);
            this.toastrService.error(
              `${this.errors.error.msg}. Rezervacija nije uspjela, molimo pokušajte poslije`
            );
          }
        }
      );
  }
}
