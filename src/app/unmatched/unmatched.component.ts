import { Component, OnInit } from '@angular/core';

import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { OrderSummary } from 'app/shared/http/ordersummary';
import { DatealertService } from 'app/shared/datealert/datealert.service';
import { DateRange } from 'app/shared/daterange/daterange';

@Component({
  selector: 'app-unmatched',
  templateUrl: './unmatched.component.html',
  styleUrls: ['./unmatched.component.scss']
})
export class UnmatchedComponent implements OnInit {

  private ordersummary: OrderSummary;
  private daterange: DateRange;

  constructor(private dataalertservice: DataalertService, private datealertservice: DatealertService) { }

  ngOnInit() {
    this.ordersummary = new OrderSummary();
    this.daterange = new DateRange();
    this.dataalertservice.getUnmatchedOrders().subscribe(orders => { this.reactunmatchedorders(orders) });
    this.datealertservice.getDaterange().subscribe(daterange => {this.reactdaterange(daterange)});
  }

  private reactdaterange(daterange: DateRange) {
    this.daterange = daterange;
  }

  private reactunmatchedorders(orders: OrderSummary) {
    this.ordersummary = orders;
  }

}
