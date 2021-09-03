import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Destination } from 'src/app/models/Destination.model';
import { environment } from 'src/environments/environment';
import { DataService } from '../common/data.service';

@Injectable({
  providedIn: 'root',
})
export class DestinationService {
  constructor(private http: HttpClient, private data: DataService) {}

  getTransportType() {
    return this.http.get(environment.serverUrl + '/get-transport-types');
  }

  createDestinationSercvice(destination: Destination) {
    return this.http.post(
      environment.serverUrl + '/destination-create',
      destination
    );
  }

  getAllDestinations() {
    return this.http.get(environment.serverUrl + '/get-all-destinations');
  }

  deleteDestination(body: any) {
    console.log(body);
    return this.http.put(
      environment.serverUrl +
        '/destination-delete/' +
        parseInt(body['dest_id']),
      body
    );
  }

  countDestinations() {
    this.http
      .get(environment.serverUrl + '/destinations-count')
      .subscribe((success: any) => {
        this.data.updateCounter(success.numOfDest);
        return success.numOfDest;
      });
  }

  updateDestination(body: any) {
    console.log(body['dest_id']);
    return this.http.put(
      environment.serverUrl +
        '/destiantion-update/' +
        parseInt(body['dest_id']),
      body
    );
  }

  getDestinationById(info_id: any) {
    this.http
      .get(environment.serverUrl + '/get-destination-by-id/' + info_id)
      .subscribe((success: any) => {
        this.data.informer(success);
        return success;
      });
  }
}
