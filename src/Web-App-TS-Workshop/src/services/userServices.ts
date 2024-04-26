import { User } from "../type/user";
import { httpServices } from "./httpServices";


export class UserServices extends httpServices<User>{
    constructor(baseUrl:string){
        super(`${baseUrl}/users`)
    }

    userGetAll(){
        //
    }

    userGetSingle(){
        //
    }
}