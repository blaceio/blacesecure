import * as moment from 'moment';

export class DateRange {
    public startdate: Date = new Date();
    public enddate: Date = new Date();
    public description: string = "";

    constructor() {
        this.startdate = moment().startOf('day').toDate();
        this.enddate = moment().endOf('day').toDate();
        this.description = "Today";
    }

}


