import axios from "axios"
import {UserModel} from "../models/UserModel";
import AsyncStorageService from "../util/storage/AsyncStorageService";


export default class UserService {
    public ApiURL = "http://10.0.2.2:5000";
    private userKey: string = "user"
    private storageService = new AsyncStorageService();


    constructor() {
    }

    private async deleteCurrentUserFromMemory() {
        await this.storageService.deleteItem(this.userKey)

    }

    public logOut(){
        this.deleteCurrentUserFromMemory()
    }

    public async saveUserInMemory(username: string) {
        await this.storageService.storeItem(this.userKey, username)
    }

    public async getUserFromMemory(): Promise<string | null > {
        return this.storageService.getItem(this.userKey).then()
    }

    public loginRequest(user: UserModel): Promise<boolean>{
        return axios.post<boolean>(`${this.ApiURL}/api/user/login`, user).then()
    }

    public registerRequest(user: UserModel): Promise<boolean>{
        return axios.post<boolean>(`${this.ApiURL}/api/user/register`, user).then()
    }

    public getUserRequest(username: string): Promise<UserModel>{
        return axios.get<UserModel>(`${this.ApiURL}/api/user/${username}`).then()
    }
}
