import { Injectable } from '@angular/core';
import {CheckIn} from "./check-in";
import {MOCK_CHECKINS} from "./mock-check-ins";

@Injectable({
  providedIn: 'root'
})
export class CheckInService {

  getCheckIns(): CheckIn[] {
    return MOCK_CHECKINS;
  }
}
