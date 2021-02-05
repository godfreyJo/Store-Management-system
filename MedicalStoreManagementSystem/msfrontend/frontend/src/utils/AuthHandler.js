import axios from "axios";
import Config from "./Config";
import {reactLocalStorage} from 'reactjs-localstorage'



class AuthHandler{
    static login(username, password,callback){
        axios.post(Config.loginUrl,{username:username, password:password}).then(function(response){            
                if (response.status===200) {
                    reactLocalStorage.set("token",response.data.access)
                    reactLocalStorage.set("refresh",response.data.refresh)                    
                }
            
        })
        .catch(function(error){
            console.log(error.response);
        })

    }
}
export default AuthHandler;