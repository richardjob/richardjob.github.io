package com.richardjob.test.framework.main;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestSession {

	WebDriver driver;
	
	final String CHROME_DRIVER_PATH = "C:\\WebDriver\\chromedriver.exe";
	
	final String HOME_URL = "https://richardjob.me/";
	
	public WebDriver createWebDriver() {
		System.setProperty("webdriver.chrome.driver", CHROME_DRIVER_PATH);
		WebDriver driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.get(HOME_URL);
		return driver;
	}
	
	public WebDriver getWebDriver() {
		if(driver == null) driver = createWebDriver();
		return driver;
	}

}
