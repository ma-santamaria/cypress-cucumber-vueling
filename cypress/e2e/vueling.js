import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { DateTime } from "luxon";
import MainPage from "../model/pages/MainPage";
import PassengersInformationPage from "../model/pages/PassengersInformationPage";
import SearchResultsPage from "../model/pages/SearchResultsPage";

const mainPage = new MainPage();
const searchResultsPage = new SearchResultsPage();
const passengersInformationPage = new PassengersInformationPage();

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

Given("the user selects a round-trip ticket from Barcelona to Madrid", () => {
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
});

Given("the user performs the search", () => {
  mainPage.doSearch();
});

Given("the user selects any outbound flight", () => {
  searchResultsPage.selectAnOutboundFlight();
});

Given("the user selects any return flight", () => {
  searchResultsPage.selectAReturnFlight();
});

When("the user accepts the travel with a Basic rate", () => {
  searchResultsPage.selectARate('Basic');
  searchResultsPage.continueProcess();
});

Then("the passengers information page is displayed", () => {
  passengersInformationPage.assertPageIsShown();
});
