Feature: A fly can be selected by the user

  A user can select a fly in the web page

  Scenario: Selecting a fly for more than one traveller

    Describir el escenario

    Given the user is in Vueling home page
    And the user selects a round-trip ticket from Barcelona to Madrid
    * with start date 4 days from today
    * with end date 3 days after the start date
    * for 2 adults and 1 child
    And the user performs the search
    And the user selects any outbound flight
    And the user selects any return flight
    When the user accepts the travel with a Basic rate
    Then the passengers information page is displayed
