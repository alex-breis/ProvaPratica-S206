/// <reference types="cypress"/>

describe("Cenário de teste para o site SwagLabs", ()=>{

  it('Caso de teste: Adicionando produto ao carrinho com sucesso', ()=>{
    realizarLogin()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('.shopping_cart_link').click()
    cy.get('.inventory_item_name').should('contain.text', 'T-Shirt')
  })
  
  it('Caso de teste: Aplicando filtro de preço com sucesso', ()=>{
    realizarLogin()
    cy.get('[data-test="product_sort_container"]').select(2)
    let price = cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price')
    cy.get(':nth-child(1) > .inventory_item_description > .pricebar > .inventory_item_price').should('contain.text', '7.99')
  })
  
  it('Caso de teste: Verificando indicador de quantidade do carrinho com sucesso', ()=>{
    realizarLogin()
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
    cy.get('.shopping_cart_badge').should('contain.text', '3')
  })

  it('Caso de teste: Finalizar compra com falha (sem preencher campos)', ()=>{
    realizarLogin()
    cy.get('.shopping_cart_link').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="error"]').should('contain.text', 'First Name is required')
  })

})

function realizarLogin(){
  cy.visit('https://www.saucedemo.com/')
  cy.get('[data-test="username"]').type('standard_user')
  cy.get('[data-test="password"]').type('secret_sauce')
  cy.get('[data-test="login-button"]').click()
  cy.get('.title').should('have.text', 'Products')

}