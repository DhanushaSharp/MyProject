package bas;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.pojo.FacebookOne;

import bas.BaseClass;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class FKlogin extends BaseClass{
	
	FacebookOne f;

@Given("User has to launch the chrome browser and maximise the window")
public void user_has_to_launch_the_chrome_browser_and_maximise_the_window() {
	
	launchBrowser();
	windowMaximize();
    
}

@When("User has to hit the flipkart url")
public void user_has_to_hit_the_flipkart_url() {
	launchUrl("https://www.flipkart.com/");
    
}

@When("User has to click login button")
public void user_has_to_click_login_button() {
	
	f = new FacebookOne();
	WebElement loginBtn = driver.findElement(By.xpath("//span[text()='Login']"));    
	loginBtn.click();
	
}


@When("User has to pass the data {string} in email field")
public void user_has_to_pass_the_data_in_email_field(String em) {
	f = new FacebookOne();
	WebElement email = driver.findElement(By.xpath("(//input[@type='text'])[2]"));
	email.sendKeys(em);
}

@When("User has to click request button")
public void user_has_to_click_request_button() {
	f = new FacebookOne();
	WebElement reqBtn = driver.findElement(By.xpath("//button[@class='_2KpZ6l _2HKlqd _3AWRsL']"));
	reqBtn.click();
}

@Then("User has to close the browser")
public void user_has_to_close_the_browser() {
	//closeEntireBrowser();
    
}

}
