@Register
Feature: Registration functionality
  As a user I want to register into NopCommerceWebsite
  @Sanity
  Scenario: User should navigate to registration page successfully
    Given I am on Home Page
    When I click on register link
    Then I should navigate to register page successfully
