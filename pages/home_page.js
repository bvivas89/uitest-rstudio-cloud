import {By, until, Key} from 'selenium-webdriver';
import {titleMatches} from 'selenium-webdriver/lib/until';
import {assert} from 'chai';

export default function(driver) {
	const pageobjects = {
		login_email_input: By.xpath("//*[@id='entry']/div/form/fieldset[1]/input"),
		login_email_continue_button: By.xpath("//*[@id='entry']/div/form/fieldset[2]/button"),
		login_password_input: By.css("#entry > div > form > fieldset.chunk > input[type=password]"),
		login_button: By.xpath("//*[@id='entry']/div/form/fieldset[2]/button"),
		newproject_button:  By.xpath("//*[@id='main']/div[2]/div/div/div[1]/div[1]/div/span/div/button"),
		new_rstudio_project_button:  By.css("#main > div.band.pushFooter > div > div > div.majorColumn > div.sectionTitle.flex > div > span > div > div > button.action.newRStudioProject"),
		rstudio_ide: By.id("contentIframe"),
		newspace_button: By.className("newSpace"),
		form_newspace: By.xpath("//*[@id='main']/div[4]/div/div/form"),
		form_newspace_inputname: By.id("name"),
		form_newspace_submitbutton: By.xpath("//*[@id='main']/div[4]/div/div/form/div[2]/button"),
		newspace_header: By.id("headerTitle"),
		newspace_allprojects_list: By.className("emptyListMessage"),
	};

	return {
		url: "https://login.rstudio.cloud/login?redirect=%2Foauth%2Fauthorize%3Fredirect_uri%3Dhttps%253A%252F%252Frstudio.cloud%252Flogin%26client_id%3Drstudio-cloud%26response_type%3Dcode%26show_auth%3D0%26show_login%3D1",
		navigate: function() {
			driver.navigate().to(this.url);
			return this.waitUntilLoginPageLoaded();
		},
		click_newspace_formsubmit_button: function() {
			return driver.findElement(pageobjects.form_newspace_submitbutton).click();
		},
		click_newspace_button: function() {
			return driver.wait(until.elementLocated(pageobjects.newspace_button), 60000).click();
		},
		click_email_continue_button: function(){
			return driver.findElement(pageobjects.login_email_continue_button).click();
		},
		click_login_button: function(){
			return driver.findElement(pageobjects.login_button).click();
		},
		click_rstudio_cloud: function(){
			return driver.wait(until.elementLocated(By.xpath("//*[@id='entry']/div/div[1]/div/a[1]")), 60000).click();
		},
		click_newproject_button: function(){
			return driver.wait(until.elementLocated(pageobjects.newproject_button), 60000).click();
		},
		click_new_rstudio_project_button: function(){
			return driver.findElement(pageobjects.new_rstudio_project_button).click();
		},
		get_page_title: function(){
			return driver.getTitle();
		},
		login_password_input_visible: function(){
			return driver.wait(until.elementLocated(pageobjects.login_password_input), 60000).isDisplayed();
		},
		newspace_header_visible: function(){
			return driver.wait(until.elementLocated(pageobjects.newspace_header), 60000).getText();
		},
		get_newspace_form_inputname: function(){
			return driver.findElement(pageobjects.form_newspace_inputname).getAttribute("value");
		},
		newspace_form_visible: function() {
			return driver.wait(until.elementLocated(pageobjects.form_newspace), 60000).isDisplayed();
		},
		newspace_allprojects_list_visible: function(){
			return driver.findElement(pageobjects.newspace_allprojects_list).isDisplayed();
		},
		rstudio_ide_visible: function(){
			return driver.wait(until.elementLocated(pageobjects.rstudio_ide), 60000).isDisplayed();
		},
		type_newspace_form_inputname: function(){
			return driver.findElement(pageobjects.form_newspace_inputname).sendKeys("Test Space");
		},
		type_email_login: function(){
			return driver.findElement(pageobjects.login_email_input).sendKeys("budosnake@gmail.com");
		},
		type_password_login:  function(){
			return driver.wait(until.elementLocated(pageobjects.login_password_input), 60000).sendKeys("Password123456!");
		},
		waitUntilLoginPageLoaded: function(){
			return driver.wait(until.titleContains("RStudio - Log In"));
		},
		waitUntilPageLoaded: function() {
			return driver.wait(until.titleContains("RStudio Cloud"));
		},
	};
}