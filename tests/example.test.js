
import { expect } from 'chai'


describe('launch app test', ()=> {

    var userEmail,firstName,lastName,pwd,textAddressline1,textAddressline2,textcity= null;

    it('App launch should work', () => {
        browser.url('http://automationpractice.com/index.php')
        const fs = require('fs');

        // Start reading the raw data from JSON file.
        let jsonFile = fs.readFileSync('/Users/user/Desktop/wdio-testing-project/tests/testdata.json');
        let jsonData = JSON.parse(jsonFile);
        userEmail = jsonData["userEmail"]
        firstName=jsonData["firstName"]
        lastName=jsonData["lastName"]
        pwd=jsonData["pwd"];
        textAddressline1=jsonData["txtaddressline1"];
        textAddressline2=jsonData["textAddressline2"];
        textcity=jsonData=["textCity"];
        //End reading the rasw data from JSON file.

        //Start reading the locators from JSON file.
        let jsonLocators = fs.readFileSync('/Users/user/Desktop/wdio-testing-project/tests/locators.json');
        let jsonlocatorsData = JSON.parse(jsonLocators);
        //End reading the locators from JSON file.

        })

    it('Verify title', ()=> {
        const title = browser.getTitle()
        expect(title).to.contains('My Store')
    })

    it('Create user', ()=> {
        const lnkSignIn = $('*=Sign in')
        lnkSignIn.waitForDisplayed()
        lnkSignIn.click()

        const txtEmail = $('#email_create')
        const btnCreateAnAccount = $("//form[@id='create-account_form']//span[1]")
        txtEmail.waitForDisplayed()
       // console.log("Test data from JSON: "+userEmail)
        txtEmail.setValue(userEmail)
        btnCreateAnAccount.click()
        const rdBtnMr = $('#id_gender1')
        const rdBtnMrs = $('#id_gender2')
        const txtCustomerFirstName  = $('#customer_firstname')
        const txtCustomerLastName  = $('#customer_lastname')

        rdBtnMr.waitForDisplayed()
        rdBtnMr.click()

        txtCustomerFirstName.waitForDisplayed()
        txtCustomerFirstName.setValue(firstName)
        txtCustomerLastName.waitForDisplayed()
        txtCustomerLastName.setValue(lastName)

        const txtPassword  = $('#passwd')
        txtPassword.setValue(pwd);


        //setting DOB
        const ddDayOfBirth   = $('//select[@id="days"]')
        const ddMonthOfBirth = $("//select[@id='months']")
        const ddYearOfBirth = $("//select[@id='years']")

        ddDayOfBirth.selectByIndex(2)
        ddMonthOfBirth.selectByIndex(2)
        ddYearOfBirth.selectByAttribute("value", "1986")

        //getValue of customer names
        var CustomerFName = $("//input[@id='firstname']").getText()
        var CustomerLName = $("//input[@id='lastname']").getText()
        var UserName = CustomerFName + CustomerLName;

        //Setting address
        const txtAddressLine1  = $('#address1')
        const txtAddressLine2  = $('#address2')
        const txtCity  = $('#city')

        txtAddressLine1.setValue(textAddressline1)
        txtAddressLine1.setValue(textAddressline2)
        txtCity.setValue(textcity)

        const ddState  = $('#id_state')
        ddState.selectByVisibleText("California")

        const txtZipOrPostalCode  = $('#postcode')
        txtZipOrPostalCode.setValue('90901')
        // By default United States is there no need to action.. only apply a validation on default values
        const ddCountry  = $('#id_country')
        ddCountry.selectByVisibleText("United States")

        const txtMobilePhone  = $('#phone_mobile')
        txtMobilePhone.setValue('0612359999')
        const btnRegister  = $("//span[contains(text(),'Register')]")
        btnRegister.click()

        //Validation on welcome page
        const lblCustomerName = $("//a[@class='account']/span")
        lblCustomerName.waitForDisplayed()
        var CustomerName = lblCustomerName.getText()
        console.log('Name of the Customer is: ' +CustomerName)

        if(CustomerName.localeCompare(UserName)) {
                console.log('User Creation SUCCESSFUL')
        }else {
            console.log('User Creation FAILED')
        }








function doSomething() {
    thing = thing + 1;
    setTimeout(doSomething, 1500);
  }

        /*c$('#days')
        // $("")
        
        //const ddYearOfBirth  = $('#years')
        //ddDayOfBirth.waitForDisplayed()
        //ddYearOfBirth.click()
        //ddDayOfBirth.selectByVisibleText('12')
        
        ddMonthOfBirth.waitForDisplayed(5000)
        console.log('Element identified....')
        ddMonthOfBirth.click()
        ddMonthOfBirth.selectByVisibleText('February')
        //ddYearOfBirth.waitForDisplayed(5000)
        //ddYearOfBirth.selectByVisibleText("1983")
*/


    })

})