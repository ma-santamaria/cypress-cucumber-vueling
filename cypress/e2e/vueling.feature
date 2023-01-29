Feature: A fly can be selected by the user

  A user can select a fly in the web page

  Scenario: Selecting a fly for more than one traveller

    Describir el escenario

    Given the user is in Vueling home page
    And the user search for a round-trip ticket from Barcelona to Madrid
    * with start date 4 days from today
    * with end date 3 days after the start date
    * for 2 adults and 1 child
    And the user selects a outbound flight with a Basic rate
    And the user selects a return flight with a Optima rate
    When the user accepts the travel
    Then the order is confirmed
