package uk.co.expedia.cucumber;

/*
Created 
By Nikita
*/


import com.cucumber.listener.Reporter;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import uk.co.expedia.basepage.BasePage;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = ".",
        plugin = {"json:target/RunCuke/cucumber.json","pretty","html:target/cucumber-report/cucumber.html", "com.cucumber.listener.ExtentCucumberFormatter:target/Extent_Reports/report.html"},
        monochrome = true
//        dryRun = true
        /*tags = {"@Sanity"}*/
)
public class CukeTest extends BasePage {

    @AfterClass
    public static void setup() {
        String projectPath = System.getProperty("user.dir");
        String reportConfigPath = projectPath + "/src/test/java/uk/co/expedia/resources/extentreport/extent-config.xml";
        Reporter.loadXMLConfig(reportConfigPath);
        Reporter.setSystemInfo("User Name", System.getProperty("user.name"));
        Reporter.setSystemInfo("Time Zone", System.getProperty("user.timezone"));
        Reporter.setSystemInfo("Machine", "Windows 10" + "64 Bit");
        Reporter.setSystemInfo("Selenium", "3.141.59");
        Reporter.setSystemInfo("Maven", "3.5.2");
        Reporter.setSystemInfo("Java Version", "1.8.0_151");
    }
}