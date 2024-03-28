import Login from "../../support/page-object/login-page";
import Verify from "../../support/page-object/verify-components";
import Logout from "../../support/page-object/logout-page";
import data from "../../fixtures/credentials.json";

// const userData = require('../../fixtures/credentials')
const login = new Login()
const logout = new Logout()
const verify = new Verify()

describe('', () => {
    beforeEach(() => {
        login.goToPage()
        verify.urlPage()
    });

    data.forEach(element => {
        it('Login with ' + element.expected, () => {
            login.inputUsername(element.username)
            login.inputPassword(element.password)
            login.clickLogin()
            logout.doLogout()
            
        });
    });
    // it('', () => {
    //     for (let i=0; i < userData.length; i++){
    //         login.inputUsername(userData[i].username)
    //         login.inputPassword(userData[i].password)
    //         login.clickLogin()
    //         if (){

    //         }
    //         // if (verify.errorMessage('locked out')){
    //         //     continue;
    //         // }
    //         // login.inputUsername().clear()
    //         // login.inputPassword().clear()
    //     }
    // });
});