import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';

import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { CurveOrder } from 'app/shared/http/curveorder';
import { DatealertService } from 'app/shared/datealert/datealert.service';
import { DateRange } from 'app/shared/daterange/daterange';

@Component({
  selector: 'app-clientsummary',
  templateUrl: './clientsummary.component.html',
  styleUrls: ['./clientsummary.component.scss']
})
export class ClientsummaryComponent implements OnInit {

    private todaysorders: Array<CurveOrder>;
    private daterange: DateRange;
    private clientlist: string[];
    private client: string;

    constructor(private dataalertservice: DataalertService, private datealertservice: DatealertService) { }

    ngOnInit() {

        this.daterange = new DateRange();

        this.dataalertservice.getTodaysOrders().subscribe(todaysorders => { this.reacttodays(todaysorders) });
        this.dataalertservice.getClientList().subscribe(clientlist => { this.reactclientlist(clientlist) });
 
        this.datealertservice.getDaterange().subscribe(daterange => {this.reactdaterange(daterange)});
    }

    private reactdaterange(daterange: DateRange) {
        this.daterange = daterange;
    }

    private reacttodays(orders: any) {
        this.todaysorders = orders;
    }

    private reactclientlist(clientlist: string[]) {
        this.clientlist = clientlist;
    }

}

