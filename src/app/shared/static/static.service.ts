import { Injectable } from '@angular/core';

import { orderreportsrequesturl } from 'app/shared/staticdata/urls'
import { curvepriceupdateurl } from 'app/shared/staticdata/urls'

@Injectable()
export class StaticDataService {

    constructor() { }

    getorderreportsrequesturl() : string {
        return orderreportsrequesturl;
    } 

    getcurvepriceupdateurl() : string {
        return curvepriceupdateurl;
    } 
}

