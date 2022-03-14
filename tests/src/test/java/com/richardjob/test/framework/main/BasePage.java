package com.richardjob.test.framework.main;

import org.openqa.selenium.WebDriver;

public abstract class BasePage {
	
	TestSession testSession;
	
	WebDriver driver;
	
	public BasePage(TestSession testSession) {
		this.testSession = testSession;
	}
	
	public abstract boolean isCurrentPage();
	
	public abstract String getPageUrl();
	
	public String getPagePrefix() {
		return "https://richardjob.me";
	}
	
	public void goToThisPage() {
		if (!this.isCurrentPage()) {
			this.testSession.getWebDriver().get(getPageUrl());
		}
	}

}
