Feature: Tags in cucumber

@SanityTest
Scenario: Verify Login
Given This is valid login test

@SanityTest @End2EndTest
Scenario: verify Logout
Given This is logout test

@RegressionTest
Scenario: Verfiy Search
Given This is search test

@RegressionTest @End2EndTest
Scenario: Verfiy advanced search
Given This is advanced search test

@End2EndTest
Scenario: verify prepaid recharge
Given This is prepaid recharge test

@End2EndTest
Scenario: verify postpaid recharge
Given This is postpaid recharge test
