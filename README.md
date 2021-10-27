This is a automated UI Test for Rstudio Cloud.
Credentials embedded in scripts. Throwaway account.



### How to run this Cucumber/Selenium Test
Install Java JDK for your operating system. 

Set Environment variables for the following:
$JAVA_HOME -> Points to your Java Home directory

Ensure you have the latest Chrome browser installed as specified by the chromedriver version in package.json.
For more info about chromedriver versions, see link below:
https://chromedriver.chromium.org/downloads/version-selection

Installs all dependencies from package.json
```javascript
npm install
``` 
Use command below to run tests
```javascript
npm test
```
