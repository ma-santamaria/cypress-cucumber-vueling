import { Given, When, Then, defineParameterType } from "@badeball/cypress-cucumber-preprocessor";
import { DateTime } from "luxon";
import MainPage from "../model/pages/MainPage";
import PassengersInformationPage from "../model/pages/PassengersInformationPage";
import SearchResultsPage from "../model/pages/SearchResultsPage";

const mainPage = new MainPage();
const searchResultsPage = new SearchResultsPage();
const passengersInformationPage = new PassengersInformationPage();

defineParameterType({
  name: 'rateType',
  regexp: /Basic|Optima|Excelente/,
  transformer(s) {
    return s;
  }
});

Given("the user is in Vueling home page", () => {
  // just a little trick to prevent new tabs when performing the search
  cy.on('window:before:load', (win) => {
    cy.stub(win, 'open').callsFake(url => {
      cy.visit(url);
    });
  });
  cy.visit('/es');
  mainPage.acceptCookies();
});

Given("the user selects a round-trip ticket from {word} to {word}", (origin, destination) => {
  mainPage.selectOrigin(origin);
  mainPage.selectDestination(destination);
});

Given("with start date {int} days from today", (numDays) => {
  var today = DateTime.now();
  this.departureDate = today.plus({days: numDays});
  mainPage.setDepartureDate(this.departureDate);
});

Given("with end date {int} days after the start date", (numDays) => {
  var returnDate = this.departureDate.plus({days: numDays});
  mainPage.setReturnDate(returnDate);
});

Given("for 2 adults and 1 child", () => {
  mainPage.increaseAdults();
  mainPage.increaseChildrens();
});

Given("the user selects the flights", () => {
  searchResultsPage.selectAnOutboundFlight();
  searchResultsPage.selectAReturnFlight();
});

Given("the user performs the search", () => {
  mainPage.doSearch();
});

When("the user accepts the travel with a {rateType} rate", (rateType) => {
  searchResultsPage.selectARate(rateType);
  searchResultsPage.continueProcess();
});

Then("the passengers information page is displayed", () => {
  passengersInformationPage.assertPageIsShown();
});
