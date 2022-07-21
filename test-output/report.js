$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Hooks.feature");
formatter.feature({
  "name": "Hooks Test in Cucumber",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add new customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on add customer details page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinations.HooksStepdefinations.user_is_on_add_customer_details_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills the customer details",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinations.HooksStepdefinations.user_fills_the_customer_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "customer is added",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinations.HooksStepdefinations.customer_is_added()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit the customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Edit customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinations.HooksStepdefinations.user_is_on_Edit_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills the customer details",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinations.HooksStepdefinations.user_fills_the_customer_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "contact details updated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinations.HooksStepdefinations.contact_details_updated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete the customer",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on Delete customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinations.HooksStepdefinations.user_is_on_Delete_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user delete customer",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinations.HooksStepdefinations.user_delete_customer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Customer deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinations.HooksStepdefinations.customer_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});