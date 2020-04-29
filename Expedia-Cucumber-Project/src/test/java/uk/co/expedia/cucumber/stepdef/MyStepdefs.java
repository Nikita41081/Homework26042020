package uk.co.expedia.cucumber.stepdef;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.expedia.pages.HomePage;
import uk.co.expedia.pages.SignInPage;

public class MyStepdefs {
    @Given("^I am on Home Page$")
    public void iAmOnHomePage() {

    }

    @When("^I click on Accounts Tab$")
    public void iClickOnAccountsTab() {
        new HomePage().clickOnAccountMenu();
    }

    @And("^I click on Sign In Tab$")
    public void iClickOnSignInTab() {
        new HomePage().clickOnSignInTab();
    }

    @And("^Enter Email ID \"([^\"]*)\"$")
    public void enterEmailID(String email) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        new SignInPage().enterEmailAddress(email);
        throw new PendingException();
    }

    @And("^Enter Password \"([^\"]*)\"$")
    public void enterPassword(String password) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        new SignInPage().enterPassword(password);
        throw new PendingException();
    }

    @And("^I click on Sign In Button$")
    public void iClickOnSignInButton() {
        new SignInPage().clickOnSignInButton();
    }

    @Then("^I should be inside my Named Account Page$")
    public void iShouldBeInsideMyNamedAccountPage() {

    }
}
