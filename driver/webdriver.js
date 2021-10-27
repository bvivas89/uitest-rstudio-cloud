import "chromedriver";
import {Builder} from "selenium-webdriver";

export default function initDriver() {
	var browser = process.env.BROWSER;
	var browsername = browser == undefined ? "chrome" : browser;
	switch (browsername.toUpperCase()) {
		default:
			return new Builder().forBrowser("chrome").build();
	}
}