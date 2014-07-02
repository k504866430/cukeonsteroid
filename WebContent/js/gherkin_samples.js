var gherkinSamples = {
	given: [
	        'I have selected "([^"]*)" from payment options'
	        ],
	when: [
	       'I visit the "([^"]*)" page',
	       'I select "([^"]*)" from payment options',
	       'I select "([^"]*)" "([^"]*)',
	       'I input "([^"]*)" "([^"]*)',
	       'I click "([^"]*)',
	       ],
	then: [
	       'I should be able to select "([^"]*)" from payment options',
	       'I should be able to select "([^"]*)',
	       'I should be able to input "([^"]*)',
	       'I should see "([^"]*)" message',
	       'I should not see "([^"]*)" message'
	       ]
}

var test = {
	title: 'I have selected "([^"]*)" from payment options',
	state: "<b>not implemented<b>"
};