import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/shared/services/common/data.service';
import { ReservationService } from 'src/app/shared/services/reservation/reservation.service';
import { UserService } from 'src/app/shared/services/user/User.service';

@Component({
  selector: 'app-dest-informer',
  templateUrl: './dest-informer.component.html',
  styleUrls: ['./dest-informer.component.scss'],
})
export class DestInformerComponent implements OnInit {
  destInfo: any;
  images: any[] = [];
  errors: any;
  user: any;

  constructor(private data: DataService, private router: Router) {}
  showNavigationIndicators = true;

  ngOnInit(): void {
    this.data.destinationInfo.subscribe((result: any) => {
      this.destInfo = result;
      console.log('ngOnInit', this.destInfo);
      if (this.destInfo) {
        this.photoBinder();
      }
    });
  }

  photoBinder() {
    this.images = [];
    for (let item in this.destInfo) {
      if (item.includes('image')) {
        this.images.push(this.destInfo[item]);
      }
    }
  }

  dispatchToReservationFormular() {
    this.router.navigateByUrl('reservation-confirmation');
  }

  // slider{}
}
