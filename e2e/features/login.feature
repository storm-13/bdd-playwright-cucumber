Feature: Login Feature Testing

    Scenario: Successful Login
        Given I am on the Login page
        When I login with valid credentials
        Then I should see "Secure Area" on the page