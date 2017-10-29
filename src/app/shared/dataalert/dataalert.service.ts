import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataalertService {
  
  private orderssubject = new Subject<any>();
  private unmatchedorderssubject = new Subject<any>();
  private clientlistsubject = new Subject<any>();
  
    constructor() {}
     
    orders(message: string) {
        this.orderssubject.next(message);
    }

    getOrders(): Observable<any> {
        return this.orderssubject.asObservable();
    }

    unmatchedorders(message: string) {
        this.unmatchedorderssubject.next(message);
    }

    getUnmatchedOrders(): Observable<any> {
        return this.unmatchedorderssubject.asObservable();
    }

    clientlist(clientlist: Set<string>) {
        this.clientlistsubject.next(clientlist);
    }

    getClientList(): Observable<any> {
        return this.clientlistsubject.asObservable();
    }
 }
