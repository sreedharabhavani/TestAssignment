/*const { remote } = require('webdriverio');

(async () => {
    const browser = await remote({
        logLevel: 'trace',
        capabilities: {
            browserName: 'chrome'
        }
    })

    await browser.url('https://duckduckgo.com')

    const inputElem = await browser.$('#search_form_input_homepage')
    await inputElem.setValue('WebdriverIO')

    const submitBtn = await browser.$('#search_button_homepage')
    await submitBtn.click()

    console.log(await browser.getTitle()) // outputs: "Title is: WebdriverIO (Software) at DuckDuckGo"

    await browser.deleteSession()
})().catch((e) => console.error(e)) 
*/
import { expect } from 'chai'

describe('launch app test', ()=> {

    it('App launch should work', () => {
        browser.url('http://automationpractice.com/index.php')
        //browser.$('#search_form_input_homepage').setValue('WebdriverIO')
        //browser.$('#search_button_homepage').click()

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
        txtEmail.setValue('SridharaBhavani@mailinator.com')
        btnCreateAnAccount.click()
        const rdBtnMr = $('#id_gender1')
        const rdBtnMrs = $('#id_gender2')
        const txtCustomerFirstName  = $('#customer_firstname')
        const txtCustomerLastName  = $('#customer_lastname')

        rdBtnMr.waitForDisplayed()
        rdBtnMr.click()

        txtCustomerFirstName.waitForDisplayed()
        txtCustomerFirstName.setValue('Sridhara')
        txtCustomerLastName.waitForDisplayed()
        txtCustomerLastName.setValue('Bhavani')

        const txtPassword  = $('#passwd')
        txtPassword.setValue('Sridhara23')


        //setting DOB
        const ddDayOfBirth   = $('//select[@id="days"]')
        const ddMonthOfBirth = $("//select[@id='months']")
        const ddYearOfBirth = $("//select[@id='years']")

        ddDayOfBirth.selectByIndex(2)
        ddMonthOfBirth.selectByIndex(2)
       // ddYearOfBirth.selectByIndex(20)
        ddYearOfBirth.selectByAttribute("value", "1986")

        //getValue of customer names
        var CustomerFName = $("//input[@id='firstname']").getText()
        var CustomerLName = $("//input[@id='lastname']").getText()
        var UserName = CustomerFName + CustomerLName;

        //Setting address
        const txtAddressLine1  = $('#address1')
        const txtAddressLine2  = $('#address2')
        const txtCity  = $('#city')

        txtAddressLine1.setValue('131 Flinders Street')
        txtAddressLine1.setValue('Lonsdale Heights')
        txtCity.setValue('Down Town')

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