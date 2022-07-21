package stepdefinations;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HooksStepdefinations {
	@Before //Before each scenario not every method
	public void setup() {
		System.out.println("Launch CHROME Browser");
		System.out.println("ENter URL of the Application");
	}
	
	@After
	public void tearDown() {
		System.out.println("Browser Closed ");
	}
	
	@Given("user is on add customer details page")
	public void user_is_on_add_customer_details_page() {
		System.out.println("User is on Add customer details page");
	   
	}

	@When("user fills the customer details")
	public void user_fills_the_customer_details() {
		System.out.println("User Fills customer details");
	}

	@Then("customer is added")
	public void customer_is_added() {
		System.out.println("Customer is Added");
	}

	@Given("user is on Edit customer page")
	public void user_is_on_Edit_customer_page() {
		System.out.println("User is on Edit Customer page");
	}

	@Then("contact details updated")
	public void contact_details_updated() {
		System.out.println("Contact details Updated");
	}

	@Given("user is on Delete customer page")
	public void user_is_on_Delete_customer_page() {
		System.out.println("user is on Delete customer page");
	}

	@When("user delete customer")
	public void user_delete_customer() {
		System.out.println("user Deletes customer");
	}

	@Then("Customer deleted")
	public void customer_deleted() {
		System.out.println("Customer Deleted");
	}


}
