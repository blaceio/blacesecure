import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataalertService {
  
  private orderssubject = new Subject<any>();
  private unmatchedorderssubject = new Subject<any>();
  private todaysorderssubject = new Subject<any>();
  private clientlistsubject = new Subject<any>();
  
     constructor() {}
     
     unmatchedorders(message: string) {
        this.unmatchedorderssubject.next(message);
    }

    getUnmatchedOrders(): Observable<any> {
        return this.unmatchedorderssubject.asObservable();
    }

    todaysorders(message: string) {
        this.todaysorderssubject.next(message);
    }

    getTodaysOrders(): Observable<any> {
        return this.todaysorderssubject.asObservable();
    }

    clientlist(clientlist: string[]) {
        this.clientlistsubject.next(clientlist);
    }

    getClientList(): Observable<any> {
        return this.clientlistsubject.asObservable();
    }
 }
