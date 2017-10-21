import { Component, OnInit }    from '@angular/core';
import { Router } from '@angular/router';

import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { CurveOrder } from 'app/shared/http/curveorder';
import { OrderService } from 'app/shared/order/order.service';

@Component({
    templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    private orders: Array<CurveOrder>;

    constructor( private dataalertservice: DataalertService, private orderservice: OrderService) { }

    ngOnInit() {
        this.dataalertservice.getOrders().subscribe(orders => {this.react(orders)});
        this.orderservice.getorders("", new Date(), new Date());
    }

    private react(orders: any) {
        this.orders = orders;
    }
}
