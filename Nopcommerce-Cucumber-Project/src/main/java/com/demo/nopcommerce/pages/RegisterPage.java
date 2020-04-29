package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());


    /*By femaleRadioButton = By.id("gender-female");
    By firstNameField = By.id("FirstName");
    By lastNameField = By.id("LastName");
    By emailField = By.id("Email");
    By companyNameField = By.id("Company");
    By passwordField = By.id("Password");
    By confirmPasswordField = By.id("ConfirmPassword");
    By registerButton = By.id("register-button");
    By registrationCompletedText = By.xpath("//div[@class='result']");
*/
    @FindBy(id = "gender-female")
    WebElement _femaleRadioButton;

    @FindBy(id = "FirstName")
    WebElement _firstNameField;

    @FindBy(id = "LastName")
    WebElement _lastNameField;

    @FindBy(id = "Email")
    WebElement _emailField;

    @FindBy(id = "Company")
    WebElement _companyNameField;

    @FindBy(id = "Password")
    WebElement _passwordField;

    @FindBy(id = "ConfirmPassword")
    WebElement _confirmPasswordField;

    @FindBy(id = "register-button")
    WebElement _registerButton;

    @FindBy(xpath = "//div[@class='result']")
    WebElement _registrationCompletedText;


    public void clickOnRadioButton() {
        Reporter.addScenarioLog("Clicking on radio button" + _femaleRadioButton.toString() + "<br>");
        clickOnElement(_femaleRadioButton);
        log.info("Clicking on radio button" + _femaleRadioButton.toString());
    }

    public void enterFirstName(String FirstName) {
        Reporter.addStepLog("Entering first name" + FirstName + "in first name field" + _firstNameField.toString() + "<br>");
        sendTextToElement(_firstNameField, FirstName);
        log.info("Entering first name" + FirstName + "in first name field" + _firstNameField.toString());
    }

    public void enterLastName(String Lastname) {
        Reporter.addStepLog("Entering last name" + Lastname + "in last name field" + _lastNameField.toString() + "<br>");
        sendTextToElement(_lastNameField, Lastname);
        log.info("Entering last name" + Lastname + "in last name field" + _lastNameField.toString());
    }

    public void enterEmailId(String Email) {
        Reporter.addStepLog("Entering email" + Email + "in email field" + _emailField.toString() + "<br>");
        sendTextToElement(_emailField, Email);
        log.info("Entering email" + Email + "in email field" + _emailField.toString());
    }

    public void enterCompanyNameField(String CompanyName) {
        Reporter.addStepLog("Entering company name" + CompanyName + "in company name field" + _companyNameField.toString() + "<br>");
        sendTextToElement(_companyNameField, CompanyName);
        log.info("Entering company name" + CompanyName + "in company name field" + _companyNameField.toString());
    }

    public void enterPassword(String Password) {
        Reporter.addStepLog("Entering password " + Password + "in password field" + _passwordField.toString() + "<br>");
        sendTextToElement(_passwordField, Password);
        log.info("Entering password " + Password + "in password field" + _passwordField.toString());
    }

    public void enterConfirmPassword(String ConfirmPassword) {
        Reporter.addStepLog("Entering confirm password" + ConfirmPassword + " in confirm password field" + _confirmPasswordField.toString() + "<br>");
        sendTextToElement(_confirmPasswordField, ConfirmPassword);
        log.info("Entering confirm password" + ConfirmPassword + " in confirm password field" + _confirmPasswordField.toString());
    }

    public void clickOnRegisterButton() {
        Reporter.addStepLog("Clicking on register button" + _registerButton.toString() + "<br>");
        clickOnElement(_registerButton);
        log.info("Clicking on register button" + _registerButton.toString());
    }

    public String getRegistrationComplition() {
        Reporter.addStepLog("Getting registration complition confirmation" + _registrationCompletedText.toString() + "<br>");
        log.info("Getting registration complition confirmation" + _registrationCompletedText.toString());
        return getTextFromElement(_registrationCompletedText);

    }
    public void registerInNopCommerce(String FirstName,String Lastname,String Email, String CompanyName, String Password,String ConfirmPassword){
        clickOnRadioButton();
        enterFirstName(FirstName);
        enterLastName(Lastname);
        enterEmailId(Email);
        enterCompanyNameField(CompanyName);
        enterPassword(Password);
        enterConfirmPassword(ConfirmPassword);
        clickOnRegisterButton();
        getRegistrationComplition();
    }

}
