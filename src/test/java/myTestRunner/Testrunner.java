package myTestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		//features= "Features",
		//features="C:/Users/abrar/eclipse-workspace/CucumberTest/Features/Tagging.feature",
		features="C:/Users/abrar/eclipse-workspace/CucumberTest/Features/Hooks.feature",
		glue= {"stepdefinations"},
		plugin= {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml_output/cucumber.xml"},
		//dryRun=true,
		strict=true,
		monochrome=true
		//tags= {"@SanityTest"} //execute only sanity Tests
		//tags= {"@End2EndTest or @RegressionTest"}// executes only the scenarios which are comes under sanity OR regression
		//tags= {"@End2EndTest","@RegressionTest"}//executes comes under both Regresion and E2E test
		//Negative specific cases
		//tags= ("not @End2EndTest") //This will ignore E2E scenarios all other scenarios gets executed
		)
		
//Cucumber Notes: Earlier we were using in tags options: ~ replaced with not, {} replaced with (), Comma(,) replaced with |or|
public class Testrunner {
	

}
