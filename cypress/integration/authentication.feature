Feature: Login tests
  Background:
    Given I open the main page
    When I Go to the login page

  @e2e-test
  Scenario: I want to test the negative and positive flows of authentication
    When I submit an empty form
    Then The "An email address required" error message appears

    When I submit the correct username and a wrong password "wrong"
    Then The "Authentication failed" error message appears

    When I submit the correct username and password
    Then The user "Robert RRRRRweew" should be authenticated

    When I click Logout
    Then The Login form is visible
