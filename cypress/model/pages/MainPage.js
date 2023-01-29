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
    var dateSelector = this._buildDateSelector(departureDate);
    cy.get('#popupCalendarSelector').find(dateSelector).click();
  }

  setReturnDate(returnDate) {
    var dateSelector = this._buildDateSelector(returnDate);
    cy.get('#popupCalendarSelector').find(dateSelector).click();
  }

  _buildDateSelector(aDate) {
    var day = aDate.day;
    var month = aDate.month - 1;
    var year = aDate.year;
    return `td[data-month="${month}"][data-year="${year}"] a[aria-label^="${day},"]`
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
