import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { StaticDataService } from 'app/shared/static/static.service';
import { DataalertService } from 'app/shared/dataalert/dataalert.service';
import { CurveOrder } from 'app/shared/http/curveorder';

import { AlertService } from 'app/shared/alert/alert.service';

@Injectable()
export class OrderService {

    constructor(private http: Http, private dataalertservice: DataalertService, private staticdataservice: StaticDataService, private alertservice: AlertService) { }

    requestorders(client: String, startdate: Date, enddate: Date, matched: boolean, todays: boolean): Observable<Array<CurveOrder>> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.staticdataservice.getorderreportsrequesturl(),
            { client, startdate, enddate, matched, todays }, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    requestunmatchedorders(): Observable<Array<CurveOrder>> {
        return this.http.get(this.staticdataservice.getunmatchedordersrequesturl())
            .map(this.extractData)
            .catch(this.handleError);
    }

    getorders(client: String, startdate: Date, enddate: Date) {
        this.requestorders(client, startdate, enddate, true, false)
            .subscribe(
            response => this.processorders(response),
            error => this.handleError(<any>error)
            );
    }

    gettodaysorders(client: String, startdate: Date, enddate: Date) {
        this.requestorders(client, startdate, enddate, true, true)
            .subscribe(
            response => this.processtodaysorders(response),
            error => this.handleError(<any>error)
            );
    }

    getunmatchedorders(client: String, startdate: Date, enddate: Date) {
        this.requestorders(client, startdate, enddate, false, false)
            .subscribe(
            response => this.processunmatchedorders(response),
            error => this.handleError(<any>error)
            );
    }

    private processorders(res: any) {
        this.dataalertservice.orders(res);
    }
    
    private processunmatchedorders(res: any) {
        this.dataalertservice.unmatchedorders(res);
    }

    private processtodaysorders(res: any) {
        this.dataalertservice.todaysorders(res);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleError(error: Response | any) {
        
        let errMsg: string;
        if( error instanceof Response) {
            const body = error.json() || '';
            const err = body.message || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        
        this.alertservice.danger(errMsg);
        return Observable.throw(errMsg);
    }

}