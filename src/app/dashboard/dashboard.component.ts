import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { OrderSummary } from 'app/shared/http/ordersummary';
import { DatealertService } from 'app/shared/datealert/datealert.service';
import { DateRange } from 'app/shared/daterange/daterange';
import { CurveOrder } from 'app/shared/http/curveorder';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    private ordersummary: OrderSummary;
    private daterange: DateRange;

    constructor(private dataalertservice: DataalertService, private datealertservice: DatealertService) { }

    ngOnInit() {
        this.ordersummary = new OrderSummary();
        this.daterange = new DateRange();
        this.dataalertservice.getOrders().subscribe(orders => { this.reactorders(orders) });
        this.datealertservice.getDaterange().subscribe(daterange => {this.reactdaterange(daterange)});
    }

    private reactdaterange(daterange: DateRange) {
        this.daterange = daterange;
    }

    private reactorders(orders: OrderSummary) {
        this.ordersummary = orders;
    }

    private updateorder(order: CurveOrder) {
        let test = 1;
    }

}
