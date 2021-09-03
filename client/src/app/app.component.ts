import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  goingUp: boolean = true;
  oldValue: any = window.pageYOffset;
  @HostListener('window:scroll', ['$event'])
  doSomething(event: any) {
    if (window.pageYOffset <= this.oldValue) {
      this.goingUp = true;
      this.oldValue = window.pageYOffset;
    } else if (window.pageYOffset >= this.oldValue && window.pageYOffset > 30) {
      this.goingUp = false;
      this.oldValue = window.pageYOffset;
    }
  }
}
