import {Component, OnInit} from '@angular/core';
import {BeerType} from "../beer-type";
import {ServingStyle} from "../serving-style";
import {CheckInService} from "../check-in.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
    beerTypes: string[] = Object.values(BeerType);
    servingStyles: string[] = Object.values(ServingStyle);
    ratings: number[] = [1, 2, 3, 4, 5];

    constructor(public checkInService: CheckInService) {}

    ngOnInit() {
        this.checkInService.getCheckIns();
    }

}
