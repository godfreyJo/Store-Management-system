const {default: AuthHandler} = require('./AuthHandler');
const {default: Axios} = require('axios');
const {default: Config} = require('./Config');


class APIHandler{
    async checkLogin(){
    if (AutHandler.checkTokenExpiry((){
        var response=await Axios.post(config.refreshApiUrl, {refesh:AuthHandler.getRefreshToken(),
        });
        console.log(response);
    }
}
async saveCompanyData(name,license_no,address,contact_no,email,description){
    checkLogin();

}



}
export default APIHandler