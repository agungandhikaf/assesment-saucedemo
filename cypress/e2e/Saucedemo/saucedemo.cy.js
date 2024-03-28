import Login from "../../support/page-object/login-page";
import Verify from "../../support/page-object/verify-components";
import Logout from "../../support/page-object/logout-page";

const userData = require('../../fixtures/credentials')
const login = new Login()
const logout = new Logout()
const verify = new Verify()

describe('', () => {
    before(() => {
        login.goToPage()
        verify.urlPage()
    });
    it('', () => {
        for (let i=0; i < userData.length; i++){
            login.inputUsername(userData[i].username)
            login.inputPassword(userData[i].password)
            login.clickLogin()
            logout.doLogout()
            login.goToPage()
        }
    });
});