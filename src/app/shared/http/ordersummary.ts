import { CurveOrder } from './curveorder';
import { Summary } from './summary';
import { FxSpot } from './fxspot';

export class OrderSummary {
    
    public orders: Array<CurveOrder> = new Array<CurveOrder>();
    public volume: number = 0.;
	public gross: number = 0.;
	public fees: number = 0.;
    public net: number = 0.;
    public clientsummary: Array<Summary> = new Array<Summary>();
    public usedspots: Array<FxSpot> = new Array<FxSpot>();

    constructor() {
        this.orders = new Array<CurveOrder>();
        this.volume = 0.;
        this.gross = 0.;
        this.fees = 0.;
        this.net = 0.;
        this.clientsummary = new Array<Summary>();
    }


}

    