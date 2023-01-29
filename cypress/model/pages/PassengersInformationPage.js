export default class PassengersInformationPage {

  assertPageIsShown() {
    cy.url().should('contain', 'PassengersInformation.aspx');
    cy.get('#passengersInformationBox').should('exist');
  }

}
