import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

import { DateRange } from 'app/shared/daterange/daterange';
import { OrderService } from 'app/shared/order/order.service';

@Component({
  selector: 'app-referencedate',
  templateUrl: './referencedate.component.html',
  styleUrls: ['./referencedate.component.scss']
})
export class ReferencedateComponent implements OnInit {

  private daterange: DateRange;
  
  constructor(private orderservice: OrderService) { }

  ngOnInit() {
    this.daterange = new DateRange();
    this.today();
  }

  private refreshqueries() {
    this.orderservice.gettodaysorders("", this.daterange.startdate, this.daterange.enddate);
    this.orderservice.getorders("", this.daterange.startdate, this.daterange.enddate);
    this.orderservice.getunmatchedorders("", this.daterange.startdate, this.daterange.enddate);
  }

  private today() {
    this.daterange.startdate = moment().startOf('day').toDate();
    this.daterange.enddate = moment().endOf('day').toDate();
    this.refreshqueries();
  }

  private yesterday() {
    let workday = moment();
    let day = workday.day();
    let diff = 1;  // returns yesterday
    if (day == 0 || day == 1){  // is Sunday or Monday
      diff = day + 2;  // returns Friday
    }
    let yesterday = workday.subtract(diff, 'days');

    this.daterange.startdate = yesterday.startOf('day').toDate();
    this.daterange.enddate = yesterday.endOf('day').toDate();

    this.refreshqueries();
  }

  private thisweek() {
    this.daterange.enddate = new Date();
    this.daterange.startdate = moment().startOf('week').toDate();

    this.refreshqueries();
  }

  private thismonth() {
    this.daterange.enddate = new Date();
    this.daterange.startdate = moment().startOf('month').toDate();

    this.refreshqueries();
  }
}
