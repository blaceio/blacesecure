import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as moment from 'moment';
import * as jsPDF from 'jspdf'

import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { OrderSummary } from 'app/shared/http/ordersummary';
import { DatealertService } from 'app/shared/datealert/datealert.service';
import { DateRange } from 'app/shared/daterange/daterange';

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
        this.dataalertservice.getTodaysOrders().subscribe(todaysorders => { this.reacttodays(todaysorders) });
        this.datealertservice.getDaterange().subscribe(daterange => {this.reactdaterange(daterange)});
    }

    private reactdaterange(daterange: DateRange) {
        this.daterange = daterange;
    }

    private reacttodays(orders: OrderSummary) {
        this.ordersummary = orders;
    }

    private download() {
        var doc = new jsPDF();
        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        doc.addPage();
        doc.text(20, 20, 'http://www.coding4developers.com/');
        
        // Save the PDF
        doc.save('Test.pdf');
    }

}
