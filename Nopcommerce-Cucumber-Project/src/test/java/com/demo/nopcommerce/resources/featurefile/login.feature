@Login
Feature: Login feature
  As a user I want to login into nope commerce website

  Scenario: User should navigate to login page successfully
    Given I am on Home Page
    When I click on login link
    Then I should navigate to login page successfully

  Scenario: User should login successfully with valid credentials
    Given I am on Home Page
    When I click on login link
    And I enter email "xyz13@gmail.com"
    And I enter password "abc123"
    And I click on login button
    Then I should login successfully
@Sanity
  Scenario Outline: Verify the error message with invalid credentials
    Given I am on Home Page
    When I click on login link
    And I enter email "<username>"
    And I enter password "<password>"
    And I click on login button
    Then I should see the error message "<errMsg>"
    Examples:
      | username         | password  | errMsg                                                                                                 |
      | abc123@gmail.com | xyz123    | Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect |
      | dfgsd@gmail.com  | djljl1234 | Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect |
      | ldjg@gmial.com   | srougoe   | Login was unsuccessful. Please correct the errors and try again.The credentials provided are incorrect |

