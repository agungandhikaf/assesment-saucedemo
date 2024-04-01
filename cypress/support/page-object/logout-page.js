class Logout{
    doLogout(){
        cy.get('#react-burger-menu-btn').click()
        cy.get('[data-test="logout-sidebar-link"]').click()
        // cy.xpath("//button[@id='react-burger-menu-btn']").click()
        // cy.xpath("//a[@id='logout_sidebar_link']").click()
    }
}

export default Logout