import io from "socket.io-client";
export class Service{
    public ApiURL = "http://localhost:5000";
    public socket = io(this.ApiURL);

    constructor() {

    }
}
