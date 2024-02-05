import { Injectable } from '@angular/core';
import {CheckIn} from "./check-in";
import {MOCK_CHECKINS} from "./mock-check-ins";
import {v4} from "uuid";

@Injectable({
  providedIn: 'root'
})
export class CheckInService {
  checkIns: CheckIn[] = [];
  selectedCheckIn: CheckIn = {} as CheckIn;

  getCheckIns(): void {
    this.checkIns = MOCK_CHECKINS;
  }

  deleteCheckIn(checkIn: CheckIn): void {
    this.checkIns = this.checkIns.filter(c => c.id !== checkIn.id);
  }

  selectCheckIn(checkIn: CheckIn): void {
    // Select
    if (!this.selectedCheckIn || this.selectedCheckIn.id !== checkIn.id) {
      this.selectedCheckIn = {...checkIn};
    } else {
      // Unselect
      this.selectedCheckIn = {} as CheckIn;
    }
  }

  removeAllCheckIns(): void {
    this.checkIns = [];
    this.selectedCheckIn = {} as CheckIn;
  }

  editCheckIn(checkIn: CheckIn): void {
    const index = this.checkIns.findIndex(c => c.id === checkIn.id);

    // -1 is not found
    if (index !== -1) {
      this.checkIns[index] = checkIn;
    }

    this.selectedCheckIn = {} as CheckIn;
  }

  addCheckIn(checkIn: CheckIn): void {
    const toAdd: CheckIn = {...checkIn};
    toAdd.id = v4();

    this.checkIns.push(toAdd);
    this.selectedCheckIn = {} as CheckIn;
  }
}
