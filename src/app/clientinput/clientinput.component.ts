import { Component, OnInit } from '@angular/core';

import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { DatealertService } from 'app/shared/datealert/datealert.service';
import { OrderService } from 'app/shared/order/order.service';
import { DateRange } from 'app/shared/daterange/daterange';

@Component({
  selector: 'app-clientinput',
  templateUrl: './clientinput.component.html',
  styleUrls: ['./clientinput.component.scss']
})
export class ClientinputComponent implements OnInit {

  private clientlist: string[];
  private daterange: DateRange;

  constructor(private orderservice: OrderService, private dataalertservice: DataalertService, private datealertservice: DatealertService) { }

  ngOnInit() {
    this.clientlist = new Array();
    this.clientlist.push("Omega");
    this.clientlist.push("Argentiere");
    this.daterange = new DateRange();
    this.datealertservice.getDaterange().subscribe(daterange => {this.reactdaterange(daterange)});
    this.dataalertservice.getClientList().subscribe(clientlist => { this.reactclientlist(clientlist) });
  }

  private reactclientlist(clientlist: string[]) {
    //this.clientlist = clientlist;
  }

  private reactdaterange(daterange: DateRange) {
    this.daterange = daterange;
  }

  private refresh(client: string) {
    this.orderservice.getorders(client, this.daterange.startdate, this.daterange.enddate, true);
    this.orderservice.getunmatchedorders(client, this.daterange.startdate, this.daterange.enddate, false);
  }

}
