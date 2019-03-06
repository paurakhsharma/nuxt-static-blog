import { When, Then } from "cypress-cucumber-preprocessor/steps";

Given('the user has browsed to the home page', () => {
  cy.visit("/")
})

When('the user browses to the home page', () => {
  cy.visit("/")
})

Then('the user should see the list of blogs', () => {
  cy.get('[data-cy="blog-list"]')
    .contains('Blog Post 1 Blog Post 2 Blog Post 3 Blog Post 4')
})