import { Injectable } from '@angular/core';

import { orderreportsrequesturl } from 'app/shared/staticdata/urls'
import { unmatchedordersrequesturl } from 'app/shared/staticdata/urls'

@Injectable()
export class StaticDataService {

    constructor() { }

    getorderreportsrequesturl() : string {
        return orderreportsrequesturl;
    } 

    getunmatchedordersrequesturl() : string {
        return unmatchedordersrequesturl;
    } 
    
}

