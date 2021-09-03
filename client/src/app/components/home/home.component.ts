import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DestinationService } from 'src/app/shared/services/destinations/destination.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  allDestinationsArray: any[] = [];

  constructor(
    public destinationService: DestinationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllDestination();
  }

  getAllDestination() {
    this.destinationService.getAllDestinations().subscribe((result: any) => {
      this.allDestinationsArray = result;
      console.log(this.allDestinationsArray);
    });
  }

  openFullInformation(id: any) {
    console.log(id);
    this.fullInformationRoute();
    this.destinationService.getDestinationById(id);
  }

  fullInformationRoute() {
    this.router.navigateByUrl('full-info');
  }
}
