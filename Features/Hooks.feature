Feature: Hooks Test in Cucumber

Scenario: Add new customer
Given user is on add customer details page
When user fills the customer details
Then customer is added

Scenario: Edit the customer
Given user is on Edit customer page
When user fills the customer details
Then contact details updated

Scenario: Delete the customer
Given user is on Delete customer page
When user delete customer
Then Customer deleted