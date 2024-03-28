class popUp{
    clickNo(){
        cy.get('.ant-modal-confirm-title').should('have.text', 'Confirm')
        cy.contains('No').click()
    }
    clickYes(){
        cy.get('.ant-modal-confirm-title').should('have.text', 'Confirm')
        cy.contains('Yes').click()
    }
}

export default popUp