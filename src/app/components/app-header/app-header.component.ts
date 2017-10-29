import { Component, ElementRef } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { OktaAuthWrapper } from 'app/shared/auth/okta.auth.wrapper';

import { OrderSummary } from 'app/shared/http/ordersummary';
import { DataalertService } from 'app/shared/dataalert/dataalert.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeader {

  private numunmatchedorders: number;

  constructor(private dataalertservice: DataalertService, private oauthService: OAuthService, private el: ElementRef) { }

  //wait for the component to render completely
  ngOnInit(): void {

    this.numunmatchedorders = 0.;

    var nativeElement: HTMLElement = this.el.nativeElement,
    parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);

    this.dataalertservice.getUnmatchedOrders().subscribe(orders => { this.reactunmatchedorders(orders) });

  }

  private reactunmatchedorders(orders: OrderSummary) {
    this.numunmatchedorders = 0;
    for (let order of orders.orders) {
      this.numunmatchedorders++;
    }
  }

  logout() {
    this.oauthService.logOut();
  }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims['name'];
  }
}
