import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { CurveOrder } from 'app/shared/http/curveorder';
import { OrderService } from 'app/shared/order/order.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    private todaysorders: Array<CurveOrder>;
    private matchedorders: Array<CurveOrder>;
    private unmatchedorders: Array<CurveOrder>;
    private totalmatched: number;
    private totalunmatched: number;
    private totalmanual: number;
    private totalfix: number;

    constructor(private dataalertservice: DataalertService, private orderservice: OrderService) { }

    ngOnInit() {

        this.totalfix = 0.;
        this.totalmanual = 0.;
        this.totalmatched = 0.;
        this.totalunmatched = 0.;

        let start = moment().startOf('day').toDate();
        var end = moment().endOf('day').toDate();

        this.dataalertservice.getTodaysOrders().subscribe(todaysorders => { this.reacttodays(todaysorders) });
        this.dataalertservice.getOrders().subscribe(orders => { this.react(orders) });
        this.dataalertservice.getUnmatchedOrders().subscribe(unmatchedorders => { this.reactunmatched(unmatchedorders) });

        this.orderservice.gettodaysorders("", start, end);
        this.orderservice.getorders("", start, end);
        this.orderservice.getunmatchedorders("", start, end);
    }

    private react(orders: any) {
        this.matchedorders = orders;
        this.totalmatched = this.matchedorders.length;
        this.totalfix = this.totalmatched + this.totalunmatched;
    }

    private reacttodays(orders: any) {
        this.todaysorders = orders;
    }

    private reactunmatched(unmatchedorders: any) {
        this.unmatchedorders = unmatchedorders;
        this.totalunmatched = this.unmatchedorders.length;
        this.totalfix = this.totalmatched + this.totalunmatched;
    }

}
