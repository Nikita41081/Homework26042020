package com.demo.nopcommerce.pages;

import com.cucumber.listener.Reporter;
import com.demo.nopcommerce.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    /*By emailField = By.id("Email");
    By passwordField = By.id("Password");
    By loginBtn = By.xpath("//input[@class='button-1 login-button']");
    By welcomeText = By.xpath("//div[@class='page-title']//h1");
    By welcomeText1 = By.xpath("//h2[contains(text(),'Welcome to our store')]");
    By errorLoginWasUnsuccessfulText = By.xpath("//div[@class='message-error validation-summary-errors']");*/

    @FindBy(id = "Email")
    WebElement _emailField;
    @FindBy(id = "Password")
    WebElement _passwordField;
    @FindBy(xpath = "//input[@class='button-1 login-button']")
    WebElement _loginBtn;
    @FindBy(xpath = "//div[@class='page-title']//h1")
    WebElement _welcomeText;
    @FindBy(xpath = "//h2[contains(text(),'Welcome to our store')]")
    WebElement _welcomeText1;
    @FindBy(xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement _errorLoginWasUnsuccessfulText;


    public void enterEmailId(String email) {
        Reporter.addStepLog("Entering emial " + email + "in email id field "+_emailField.toString());
        sendTextToElement(_emailField, email);
        log.info("Entering emial " + email + "in email id field "+_emailField.toString());
    }
    public void enterPassword(String password){
        Reporter.addStepLog("Entering password" + password + " in password field "+ _passwordField.toString());
        sendTextToElement(_passwordField, password);
        log.info("Entering password" + password + " in password field "+ _passwordField.toString());
    }
    public void clickOnLoginButton(){
        Reporter.addStepLog("Clicking on login button" + _loginBtn.toString());
        clickOnElement(_loginBtn);
        log.info("Clicking on login button" + _loginBtn.toString());
    }
    public String getWelcomeText(){
        Reporter.addStepLog("Geting welcome text" + _welcomeText.toString());
        log.info("Geting welcome text" + _welcomeText.toString());
        return getTextFromElement(_welcomeText); }

    public String getWelcomeText1(){
        Reporter.addStepLog("Getting welcome text1" + _welcomeText1.toString());
        log.info("Getting welcome text1" + _welcomeText1.toString());
        return getTextFromElement(_welcomeText1);
    }

    public String getErrorLoginWasUnsuccefulText(){
        Reporter.addStepLog("Getting login error message" + _errorLoginWasUnsuccessfulText.toString());
        log.info("Getting login error message" + _errorLoginWasUnsuccessfulText.toString());
        return getTextFromElement(_errorLoginWasUnsuccessfulText);}

    public void logInToNopCommerce(String username, String password){
        enterEmailId(username);
        enterPassword(password);
        clickOnLoginButton();
    }
}
