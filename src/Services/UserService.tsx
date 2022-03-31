import {Service} from "./Service";
import axios from "axios"
import {User} from "../models/User";

export default class UserService extends Service{
    constructor() {
        super();
    }
    public loginRequest(user: User): Promise<boolean>{
        return axios.post<boolean>(`${this.ApiURL}/api/user/login`, user).then()
    }

    public registerRequest(user: User): Promise<boolean>{
        return axios.post<boolean>(`${this.ApiURL}/api/user/register`, user).then()
    }
}
