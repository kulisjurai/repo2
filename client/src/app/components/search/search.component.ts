import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/common/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchState: any;
  closingState: any = true;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.searchStatus.subscribe((status) => {
      this.searchState = status;
      console.log(status, 'searchComp');
    });
  }
  closingFunction() {
    this.searchState = !this.searchState;
  }
}
