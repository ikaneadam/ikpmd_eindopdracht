export class Service{
    public ApiURL =  "ws://10.0.2.2:5000";
    public ws = new WebSocket(this.ApiURL);
    constructor() {

    }


}
