import initDriver from "../driver/webdriver.js";
import HomePage from "../pages/home_page.js";
import {Given, When, Then, After, Before} from "@cucumber/cucumber";

import {assert} from "chai";

var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

let driver;
let homepage;

Before(async () => {
    driver = await initDriver();
    homepage = new HomePage(driver);
});

Given("I navigate to the rstudio cloud login page", async () => {
    await homepage.navigate();
});

Then("the rstudio login page should load", async () => {
    await homepage.waitUntilLoginPageLoaded();
});

When("I type in {string} into the email input field", async (string) => {
    await homepage.type_email_login();
});

When("I click on the Continue button", async() => {
    await homepage.click_email_continue_button();
});

Then("the password input field should be visible", async () => {
    await homepage.login_password_input_visible();
    assert.equal(await homepage.login_password_input_visible(), true);
});

When("I type in {string} into the password input field", async (string) => {
    await homepage.type_password_login();
});

When("I click on the Log In button", async() => {
    await homepage.click_login_button();
});

Then("the rstudio cloud home page should load", async () => {
    await homepage.waitUntilPageLoaded();
});

Then("the page title should be {string}", async (string) => {
    await homepage.get_page_title();
    assert.equal(await homepage.get_page_title(), string);
});

// When("I click on the rstudio cloud button after login", async () => {
//     await homepage.click_rstudio_cloud(); 
// });

When("I click on the New Space button from the side navbar", async () => {
    await homepage.click_newspace_button();
});

Then("a pop-up form should appear with a name input field", async () => {
    await homepage.newspace_form_visible();
    assert.equal(await homepage.newspace_form_visible(), true);
});

When("I type in {string} into the name field", async (string) => {
    await homepage.type_newspace_form_inputname();
});

When("I click on the Create button", async () => {
    await homepage.click_newspace_formsubmit_button();
});

Then("the {string} workspace page should be visible", async (string) => {
    await homepage.newspace_header_visible();
});

When("I click on New Project button", async() => {
    await homepage.click_newproject_button();
});

When("I click on New Rstudio Project", async() => {
    await homepage.click_new_rstudio_project_button();
});

Then("the rstudio IDE should load", async () => {
    await homepage.rstudio_ide_visible();
});

// Then("the All Projects list should be empty", async () => {
//    await homepage.newspace_allprojects_list_visible();
//    assert.equal(await homepage.newspace_allprojects_list_visible(), false);
// });

After(() => driver.quit());