package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.FacebookOne;

import bas.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FbLoginPageOne extends BaseClass {
	
	FacebookOne f;
	

	@Given("User has to launch the chrome browser and maximie the window")
	public void user_has_to_launch_the_chrome_browser_and_maximie_the_window() {
		launchBrowser();
		windowMaximize();
	    
	}

	@When("User has to hit the facebook url")
	public void user_has_to_hit_the_facebook_url() {
		launchUrl("https://en-gb.facebook.com/");
	    
	}

	@When("User has to pass the data {string} in email field")
	public void user_has_to_pass_the_data_in_email_field(String em) {
		f = new FacebookOne();
		WebElement email = driver.findElement(By.xpath("//input[@type='text']"));
		email.sendKeys(em);
	}

	@When("User has to pass the data {string} in password field")
	public void user_has_to_pass_the_data_in_password_field(String pass) {
		f = new FacebookOne();
		WebElement password = driver.findElement(By.xpath("//input[@placeholder='Password']"));
		password.sendKeys(pass);
	   
	}

	@When("User has to click login button")
	public void user_has_to_click_login_button() {
		f = new FacebookOne();
		
		WebElement clickBtn = driver.findElement(By.xpath("//button[@type='submit']"));
		clickBtn.click();
	    
	}

	@Then("User has to close the browser")
	public void user_has_to_close_the_browser() {
		//closeEntireBrowser();
	    
	}




	
}