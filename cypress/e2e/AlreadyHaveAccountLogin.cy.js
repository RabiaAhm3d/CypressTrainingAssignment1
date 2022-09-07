
describe('Already Have Account Login',()=>{
    it('Enter Email',()=>{
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
        cy.get('.page-subheading').should('contain','Already registered?')
        var email='rabiaahmed@gmail.com'
        cy.get('.form-group').should('contain','Email address')
        cy.get('#email').type(email).should('have.value',email)
        cy.get('.form-group').should('contain','Password')
        const password='10pearls2+'
        cy.get('#passwd').type(password)
        cy.get('.lost_password').should('contain','Forgot your password?')
        cy.get('#SubmitLogin').click()
        


    })
})