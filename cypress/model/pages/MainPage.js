export default class MainPage {

  acceptCookies() {
    cy.get('#onetrust-accept-btn-handler').click();
  }

  selectOrigin(originName) {
    cy.get('#originInput').click();
    cy.get('vy-airports-li li:not(.title)').contains(originName).click();
  }

  selectDestination(destinationName) {
    cy.get('vy-airports-li li:not(.title)').contains(destinationName).click();
  }

  setDepartureDate(departureDate) {
    var day = departureDate.day;
    var month = departureDate.month - 1;
    var year = departureDate.year;
    var dateSelector = `td[data-month="${month}"][data-year="${year}"] a[aria-label^="${day},"]`
    cy.get('#popupCalendarSelector').find(dateSelector).click();
  }

  setReturnDate(returnDate) {
    var day = returnDate.day;
    var month = returnDate.month - 1;
    var year = returnDate.year;
    var dateSelector = `td[data-month="${month}"][data-year="${year}"] a[aria-label^="${day},"]`
    cy.get('#popupCalendarSelector').find(dateSelector).click();
  }

  increaseAdults() {
    cy.get('#adultsIncrease').click();
  }

  increaseChildrens() {
    cy.get('#childrenIncrease').click();
  }

  doSearch() {
    cy.get('#btnSubmitHomeSearcher').click();
  }

}
