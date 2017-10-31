export class FxSpot {

    private date: Date = new Date();
    private rate: number = 0.;
    private pair: string = "";

    constructor() {
        this.date = new Date();
        this.rate = 0.;
        this.pair = "";
    }
}
