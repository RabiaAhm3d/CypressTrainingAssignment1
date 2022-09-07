

 describe('Automate login', () => {
  beforeEach(()=>{
    cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
  })
  
  it('Create Account', () => {
   
    let email='cypress.Test'+Math.random(2)+'@gmail.com'

    //should and contain assertion
   cy.get('.page-subheading').should('contain','Create an account')
   cy.get('.form_content').should('contain','Please enter your email address to create an account.')
   cy.get('.form-group').should('contain','Email address')
   cy.get('#email_create').type(email).should('have.value', email)
   cy.get('#SubmitCreate').click()
   cy.wait(5000) // because page is taking long time to load
   cy.get('.page-heading').should('contain','Create an account')

   //radio button assertion to be checked or not
   cy.get('#id_gender2').click().should('be.checked')
   cy.get('#id_gender1').should('not.be.checked')

   //expect Assertions
   var firstName='Rabia'
   cy.get('#customer_firstname').type(firstName)
   expect(firstName).to.contain(firstName)
   var lastName='Ahmed'
   cy.get('#customer_lastname').type(lastName)
   expect(lastName).to.contain(lastName)
   expect(email).to.contain(email)
   const password= '122312'
   cy.get('#passwd').type(password)
   expect(password).to.equal(password)
   expect(password).to.have.length.of.at.least(5)
   const day='30'
   cy.get('#days').select(day)
   expect(day).to.equal(day)
   cy.get('#months').select('December')
   const year='1980'
   cy.get('#years').select(year)
   expect(year).to.have.length.of.at.most(4)
   cy.get('#newsletter').click().should('be.checked')
   cy.get('#optin').should('not.be.checked')
   var address='ABC area'
   cy.get('#address1').type(address)
   expect(address).to.eq(address)
   var city ='Vienna'
   cy.get('#city').type(city)
   var country='Virginia'
   cy.get('#id_state').select(country)
   const postalCode='75050'
   cy.get('#postcode').type(postalCode)
   expect(postalCode).to.have.length(5)
   cy.get('#phone_mobile').type('+923122121')
   cy.get('#other').type('testing')
   cy.get('#alias').clear().type(city+''+country)
   cy.get('#submitAccount').click()
})
})

