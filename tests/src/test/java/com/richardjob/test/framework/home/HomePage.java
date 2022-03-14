package com.richardjob.test.framework.home;

import java.time.Duration;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.richardjob.test.framework.main.BasePage;
import com.richardjob.test.framework.main.TestSession;

public class HomePage extends BasePage {
	
	WebDriver driver;
	
	public HomePage(TestSession testSession) {
		super(testSession);
		driver = testSession.getWebDriver();
		PageFactory.initElements(driver, this);
	}

	@Override
	public boolean isCurrentPage() {
		return driver.getCurrentUrl().equals(getPageUrl());
	}

	@Override
	public String getPageUrl() {
		String prefix = this.getPagePrefix();
		String suffix = "/";
		return prefix + suffix;
	}
	
	@FindBy(xpath="//*[@class='display-3']")
	WebElement helloWorld;

	public void validateHelloWorldIsDisplayed() {
		WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		
		wait.until(webDriver -> ((JavascriptExecutor) webDriver).executeScript("return document.readyState").equals("complete"));
		js.executeScript("arguments[0].scrollIntoView()", helloWorld);
		Assert.assertTrue(helloWorld.isDisplayed(), "Hello World Message is not Displayed");
		Assert.assertTrue(helloWorld.getText().contains("Hello World"), "Hello World message is incorrect");
	}
}
