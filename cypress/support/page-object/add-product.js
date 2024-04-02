import Verify from "./verify-components";

const verify = new Verify()

class Add {
    productSatu(){
        cy.xpath("//button[@id='add-to-cart-sauce-labs-backpack']").click()
        verify.successAddProductSatu()
    }
    productDua(){
        cy.xpath("//button[@id='add-to-cart-sauce-labs-bike-light']").click()
        verify.successAddProductDua()
    }
    productTiga(){
        cy.xpath("//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']").click()
        verify.successAddProductTiga()
    }
    productEmpat(){
        cy.xpath("//button[@id='add-to-cart-sauce-labs-fleece-jacket']").click()
        verify.successAddProductEmpat()
    }
    productLima(){
        cy.xpath("//button[@id='add-to-cart-sauce-labs-onesie']").click()
        verify.successAddProductLima()
    }
    productEnam(){
        cy.xpath("//button[@id='add-to-cart-test.allthethings()-t-shirt-(red)']").click()
        verify.successAddProductEnam()
    }
}

export default Add