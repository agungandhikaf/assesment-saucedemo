class Logout{
    doLogout(){
        cy.xpath("//button[@id='react-burger-menu-btn']").click()
        cy.xpath("//a[@id='logout_sidebar_link']").click()
    }
}

export default Logout