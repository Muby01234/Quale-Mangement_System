describe('This is a login test suite for the Quales Course Management System', () => {
    // This is an it block
    it('Verify that user with correct credentials can login to the Quales Course Management app', () => {
    // This is where we shall be writing our cypress tests
    cy.visit('https://academy.quales.tech/');

    cy.get('.css-48p1y4 > .MuiButtonBase-root').click()

    cy.get('[data-testid="EmailAddress"]').type("ay@mail.com")
    cy.get('[data-testid="Password"]').type("pass1234")
    cy.get('.MuiButton-contained').click()
    cy.contains("Course").should("be.visible")
    cy.contains("List of Courses").should("be.visible")
    cy.contains("Login Successfull").should("be.visible")
    });
});
describe('this user should be able to see this items on the page to create a course', () => {
 // This is an it blockk
 it('Verify that user can Create a course on  the Quales Course Management app', () => {
     cy.get('.MuiGrid-root > .MuiButtonBase-root').click()
     cy.contains("Add New Course").should("be.visible")
     cy.contains("Title*").should("be.visible")
     cy.contains("Courses").should("be.visible")
     cy.contains("Description*").should("be.visible")
     cy.contains("Category*").should("be.visible")
     cy.contains("Premium Course").should("be.visible")
     cy.contains("Image URL").should("be.visible") 
     cy.contains("Location*").should("be.visible")
     


 });
});
describe('this user should input data the page to create a course', () => {
    // This is an it blockk
    it('Verify that user can Create a course on  the Quales Course Management app', () => {
        cy.get(':nth-child(1) > .MuiContainer-root')
        cy.viewport("macbook-16")
        cy.get('[data-testid="Title*"]').type('Muabrak')
        cy.get('[data-testid="Description*"]').type("jjdididiod")
        cy.get('#demo-simple-select').click()
        cy.viewport("macbook-16")
        cy.get('[data-value="2"]').click()
        cy.get('[data-testid="ImageURL"]').type('https://github.com/Ayobamee/Cypress10')
        cy.get('[data-testid="offline"]').click()
        cy.get('[data-testid="Address*"]').type('https://github.com/Ayobamee/Cypress10')
        cy.get('.css-tzsjye > .MuiButton-root').click()
     
    
    });
    
});
