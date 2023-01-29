export default class SearchResultsPage {

  selectAnOutboundFlight() {
    cy
      .get('#outboundFlightCardsContainer')
      .should('exist')
      .find('#flightCardsContainer')
      .should('be.visible')
      .find('#flightCardInfo')
      .then((flightCards) => {
        var flightCard = flightCards[Math.floor(Math.random() * flightCards.length)];
        cy.wrap(flightCard).click();
      });
  }

  selectAReturnFlight() {
    cy
      .get('#inboundFlightCardsContainer')
      .should('exist')
      .find('#flightCardsContainer')
      .should('be.visible')
      .find('#flightCardInfo')
      .then((flightCards) => {
        var flightCard = flightCards[Math.floor(Math.random() * flightCards.length)];
        cy.wrap(flightCard).click();
      });
  }

  selectARate(rateType) {
    cy.get('#faresTitle').should('be.visible');
    cy.get('ul#faresList').should('be.visible');
    cy.get(`label[for="${rateType}"]`).click();
  }

  continueProcess() {
    cy.get('#stvContinueButton').click();
  }

}
