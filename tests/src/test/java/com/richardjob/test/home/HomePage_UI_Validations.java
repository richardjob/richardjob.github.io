package com.richardjob.test.home;

import org.testng.annotations.Test;

import com.richardjob.test.framework.home.HomePage;
import com.richardjob.test.framework.main.BaseTest;
import com.richardjob.test.framework.main.TestSession;

public class HomePage_UI_Validations extends BaseTest {
	
	@Test(groups = {"general"})
	public void test_HomePage_UI_Validations() {
		TestSession testSession = this.getTestSession();
		HomePage homePage = new HomePage(testSession);
		
		homePage.goToThisPage();
		homePage.validateHelloWorldIsDisplayed();

	}
}
