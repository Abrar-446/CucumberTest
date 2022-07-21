$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/MyAccount-Login.feature");
formatter.feature({
  "name": "MyAccount-Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Log-in with valid username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinations.MyAccountLoginStepDefinations.open_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the URL \"http://practice.automationtesting.in/\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinations.MyAccountLoginStepDefinations.enter_the_URL(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on My Account Menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinations.MyAccountLoginStepDefinations.click_on_My_Account_Menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter registered username and password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinations.MyAccountLoginStepDefinations.enter_registered_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinations.MyAccountLoginStepDefinations.click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User must successfully login to the web page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinations.MyAccountLoginStepDefinations.user_must_successfully_login_to_the_web_page()"
});
formatter.result({
  "status": "passed"
});
});