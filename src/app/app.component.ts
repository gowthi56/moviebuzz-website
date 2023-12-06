import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moviebuzz';
  interestedCount: number = 0;
decrementCount:number = 0;
  incrementInterestedCount() {
    this.interestedCount++;
  }
  decrementInterestedCount() {
    this.decrementCount--;
  }
  interesteddCount: number = 0;
  decrementdCount:number = 0;
    incrementInteresteddCount() {
      this.interesteddCount++;
    }
    decrementInteresteddCount() {
      this.decrementdCount--;
    }
}
