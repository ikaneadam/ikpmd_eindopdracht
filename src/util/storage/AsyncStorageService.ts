import {AsyncStorage} from "react-native";
import {UserModel} from "../../models/UserModel";


export default class AsyncStorageService{

    public async storeItem(key: string, item: string){
        try {
            await AsyncStorage.setItem(key, item);
        } catch (error) {
        }
    };

    public async getItem(key: string): Promise<string | null>{
        const value = await AsyncStorage.getItem(key);
        return value
    };

    public async deleteItem (key: string): Promise<void>{
       const value = await AsyncStorage.removeItem(key);
    }
}
