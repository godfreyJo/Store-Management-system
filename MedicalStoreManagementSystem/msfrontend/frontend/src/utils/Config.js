class Config{
    static loginUrl="http://localhost:8000/api/gettoken/";
   
    static companyApiUrl="http://localhost:8000/api/company/";
    static refreshApiUrl="http://localhost:8000/api/refresh_token";
    static homeUrl="/home";
    static logoutPageUrl = "/logout";

    static sidebarItem=[
        {"index":"0","title":"Home","url":"/home","icons":"home"},
        {"index":"1","title":"Company","url":"/company","icons":"assessment"},
       
    ];

}

export default Config;