import { Order } from './order';

export class CurveOrder {
    public orderid: string = "";
    public pair: string = "";
    public ccy: string = "";
    public matched: boolean = false;
    public tradedate: Date = new Date();
    public client: string = "";
    public quantity: number = 0.;
    public valuedate: Date = new Date();
    public trader: string = "";
    public type: string = "";
    public clientleg: Order = new Order();
    public execleg: Order = new Order();

    constructor() {
        this.orderid = "";
        this.pair = "";
        this.ccy = "";
        this.matched = false;
        this.tradedate = new Date();
        this.client = "";
        this.quantity = 0.;
        this.valuedate = new Date();
        this.trader = "";
        this.type = "";
        this.clientleg = new Order();
        this.execleg = new Order();
    }
}



    