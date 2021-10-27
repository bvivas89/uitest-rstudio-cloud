Feature: UI Test - Rstudio Cloud   

    Scenario: Creating a space
        Given I navigate to the rstudio cloud login page
        Then the rstudio login page should load
        When I type in "budosnake@gmail.com" into the email input field
        And I click on the Continue button
        Then the password input field should be visible
        When I type in "Password123456!" into the password input field
        And I click on the Log In button
        Then the rstudio cloud home page should load
        And the page title should be "RStudio Cloud"
        # When I click on the rstudio cloud button after login
        When I click on the New Space button from the side navbar
        Then a pop-up form should appear with a name input field
        When I type in "Test Space" into the name field
        And I click on the Create button
        Then the "Test Space" workspace page should be visible

    Scenario: Create a new RStudio project
        Given I navigate to the rstudio cloud login page
        Then the rstudio login page should load
        When I type in "budosnake@gmail.com" into the email input field
        And I click on the Continue button
        Then the password input field should be visible
        When I type in "Password123456!" into the password input field
        And I click on the Log In button
        Then the rstudio cloud home page should load
        And the page title should be "RStudio Cloud"
        When I click on New Project button
        And I click on New Rstudio Project
        Then the rstudio IDE should load
    