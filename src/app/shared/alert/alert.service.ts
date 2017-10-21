import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
 
@Injectable()
export class AlertService {
    private successsubject = new Subject<any>();
    private infosubject = new Subject<any>();
    private warningsubject = new Subject<any>();
    private dangersubject = new Subject<any>();
 
    constructor() {}
 
    success(message: string) {
        this.successsubject.next(message);
    }
 
    info(message: string) {
        this.infosubject.next(message);
    }

    warning(message: string) {
        this.warningsubject.next(message);
    }
    danger(message: string) {
        this.dangersubject.next(message);
    }

    getSuccessMessage(): Observable<any> {
        return this.successsubject.asObservable();
    }

    getInfoMessage(): Observable<any> {
        return this.infosubject.asObservable();
    }

    getWarningMessage(): Observable<any> {
        return this.warningsubject.asObservable();
    }

    getDangerMessage(): Observable<any> {
        return this.dangersubject.asObservable();
    }
}