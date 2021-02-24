import { reactLocalStorage } from "reactjs-localstorage";

const {default: AuthHandler} = require('./AuthHandler');
const {default: Axios} = require('axios');
const {default: Config} = require('./Config');


class APIHandler{
    async checkLogin() {
        if (AuthHandler.checkTokenExpiry()) {
            try{
                var response = await Axios.post(Config.refreshApiUrl, {
                    refesh: AuthHandler.getRefreshToken(),
                });
                reactLocalStorage.set('token', response.data.access);
        } catch(error){
// Not using valid Token for refresh
            console.log(error);
            AuthHandler.logoutUser();
            window.location="/";
        }

            }
          
}

async saveCompanyData(
    name,
    license_no,
    address,
    contact_no,
    email,
    description
    ){

    await this.checkLogin();
    // wait 
     var response=await Axios.post(
         Config.companyApiUrl, {
             name:name, 
             license_no:license_no, 
             address:address, 
             contact_no:contact_no, 
             email:email, 
             description:description
            },
        { headers: {Authorization:"Bearer "+AuthHandler.getLoginToken() } }
        );
        return response;
}
async fetchAllCompany(){
    await this.checkLogin();
    var response = await Axios.get(Config.companyApiUrl, {headers: {Authorization:"Bearer "+AuthHandler.getLoginToken()},
});

return response;

}

}
export default APIHandler;