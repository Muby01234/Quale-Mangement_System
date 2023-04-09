/// <reference types="cypress"/>
// This is a describe block
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