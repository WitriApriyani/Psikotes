package runners;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features = "src/test/resources/featuresFiles", 
				glue = "definitions",
				plugin = { "pretty","html: target/cucumber-reports", "json: target/cucumber-reports/UserManagement.json" })

public class PalindromeRunner extends AbstractTestNGCucumberTests {

}
