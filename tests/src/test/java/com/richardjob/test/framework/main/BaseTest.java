package com.richardjob.test.framework.main;

import org.openqa.selenium.WebDriver;

public class BaseTest {
	
	TestSession testSession;
	
	WebDriver driver;
	
	public TestSession getTestSession() {
		if(testSession == null) this.testSession = new TestSession();
		driver = this.testSession.getWebDriver();
		return testSession;
	}	

}
