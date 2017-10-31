import { Component, ElementRef } from '@angular/core';

import * as moment from 'moment';

import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { FxSpot } from 'app/shared/http/fxspot';
import { OrderSummary } from 'app/shared/http/ordersummary';

@Component({
  selector: 'app-aside',
  templateUrl: './app-aside.component.html'
})
export class AppAside {

  public usedspots: Array<FxSpot>;

  constructor(private el: ElementRef, private dataalertservice: DataalertService) { }

  //wait for the component to render completely
  ngOnInit(): void {
    var nativeElement: HTMLElement = this.el.nativeElement,
    parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);

    this.usedspots = new Array<FxSpot>();
    this.dataalertservice.getOrders().subscribe(orders => { this.reactorders(orders) });
  }

  private reactorders(orders: OrderSummary) {
    this.usedspots = orders.usedspots;
  }

}
