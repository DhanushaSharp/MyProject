package org.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources", 
glue = "org.stepdefinition",
dryRun = false,
monochrome = true,

plugin = {"html:Report" , "junit:Report\\junitReport.xml" , "json:Report\\jsonreport.json"}

)
public class TestRun{

}
//snippets = SnippetType.UNDERSCORE,