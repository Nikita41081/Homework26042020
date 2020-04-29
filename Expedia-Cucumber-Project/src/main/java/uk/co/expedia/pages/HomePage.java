package uk.co.expedia.pages;

import com.cucumber.listener.Reporter;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import uk.co.expedia.utility.Utility;

/**
 * Created by Jay
 */
public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    /*By flightsTab = By.xpath("//button[@id='tab-flight-tab-hp']//span[@class='uitk-icon uitk-icon-flights']");
    By accountLink = By.id("header-account-menu");*/

@FindBy(xpath = "//button[@id='tab-flight-tab-hp']//span[@class='uitk-icon uitk-icon-flights']")
    WebElement _flightsTab;
@FindBy(id = "header-account-menu")
WebElement _accountLink;
@FindBy(xpath = "//button[@id='header-account-signin-button']")
WebElement _signInTab;

    public void clickOnFlightsTab() {
        Reporter.addStepLog("Clicking on flights tab : " + _flightsTab.toString() + "<br>");
        clickOnElement(_flightsTab);
        log.info("Clicking on flights tab : " + _flightsTab.toString());
    }

    public void clickOnAccountMenu() {
        Reporter.addStepLog("Clicking on account menu : " + _accountLink.toString() + "<br>");
        clickOnElement(_accountLink);
        log.info("Clicking on account menu : " + _accountLink.toString());
    }
    public void clickOnSignInTab() {
        Reporter.addStepLog("Clicking on Sign In Tab : " + _signInTab.toString() + "<br>");
        clickOnElement(_signInTab);
        log.info("Clicking on Sign In Tab : " + _signInTab.toString());
    }
}
