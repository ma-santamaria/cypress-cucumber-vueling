import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import MainPage from "../model/pages/MainPage";
import { DateTime } from "luxon";

const mainPage = new MainPage();

Given("the user is in Vueling home page", () => {
  cy.visit("/es");
  cy.window().then((win) => {
    cy.spy(win, 'open').as('redirect');
  });
  mainPage.acceptCookies();
});

Given("the user search for a round-trip ticket from Barcelona to Madrid", () => {
  mainPage.selectOrigin('Barcelona');
  mainPage.selectDestination('Madrid');
});

Given("with start date 4 days from today", () => {
  var today = DateTime.now();
  this.departureDate = today.plus({days: 4});
  mainPage.setDepartureDate(this.departureDate);
});

Given("with end date 3 days after the start date", () => {
  var returnDate = this.departureDate.plus({days: 3});
  mainPage.setReturnDate(returnDate);
});

Given("for 2 adults and 1 child", () => {
  mainPage.increaseAdults();
  mainPage.increaseChildrens();
  mainPage.doSearch();
  cy
    .get('@redirect')
    .should('be.called');
});

Given("the user selects a outbound flight with a Basic rate", () => {
  // throw new Error('Not implemented yet');
});

Given("the user selects a return flight with a Optima rate", () => {
  // throw new Error('Not implemented yet');
});

When("the user accepts the travel", () => {
  // throw new Error('Not implemented yet');
});

Then("the order is confirmed", () => {
  // throw news Error('Not implemented yet');
});
