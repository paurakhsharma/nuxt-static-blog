import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When('the user opens the blog post number {int}', (number) => {
  cy.get('li')
    .contains(`Blog Post ${number}`)
    .click()
})

Then('the user should see the blog post {string}', (blogPostUrl) => {
  cy.url()
    .should('contain', blogPostUrl)
})

Then('the content of blog post should be {string}', (content) => {
  cy.get('body')
    .should('contain', content)
})

Then('the content of blog post should be an image', () => {
  cy.get('a > img')
    .should('be.visible')
})