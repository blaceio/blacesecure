import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { DateRange } from 'app/shared/daterange/daterange';

@Injectable()
export class DatealertService {
  
  private daterangesubject = new Subject<any>();
  
     constructor() {}
  
     daterange(daterange: DateRange) {
         this.daterangesubject.next(daterange);
     }

     getDaterange(): Observable<any> {
         return this.daterangesubject.asObservable();
     }
 }
