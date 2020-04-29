Feature: Contact Sales functionality
  As a user I want to submit contact details in orangehrm
  Scenario: User should submit contact details successfully
    Given I am on home page
    When I click on contact sales button
    Then I should navigate to contact sales page

  Scenario: User should submit contact details successfully
    Given I am on home page
    When I click on contact sales button
    And I enter first name "Nikita"
    And I enter last name "Patel"
    And I enter company name "ACB Ltd."
    And I select number employees "151 - 200"
    And I enter phone number "07777888899"
    And I enter job title "QA Tester"
    And I enter "abcdefg123@yahoo.co.uk"
    And I select country name "United Kingdom"
    Then I enter comment "None"

