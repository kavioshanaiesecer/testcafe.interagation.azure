import { Selector } from 'testcafe'

//Description and Fixture Name to navigate to URL Page
//Definition of Test Suite
fixture`Getting Started with TestCafe`
    .page('https://dgrqaadminportal.azurewebsites.net')
    .before(async t => {
        // Test setup goes here
        // await runDatabaseReset()
        // await seedTestDate()
    })
    .beforeEach(async t => {
        // Runs before each test

        // Setting the Test Speed
        await t.setTestSpeed(1);

        // Set Page Load Timeout
        await t.setPageLoadTimeout(0);

        // Maximize the Window
        await t.maximizeWindow();
    })
    .after(async t => {
        // Cleaning Test Data
        // Logging and Sending Data to Monitoring Systems
    })
    .afterEach(async t => {
        // Runs after each test
    })

// testcase to fill the name in input and click submit
test('Login to DGR Admin Portal', async t => {

    // Set Test Speed
    //await t.setTestSpeed(0.5);

    // Selector (Can use in a seperate file as well)
    const username_input = Selector("input[name='username']");
    const password_input = Selector("input[name='password']");
    const login_button = Selector("button[type='submit']");

    // Screenshot overrride path
    //await t.takeScreenshot({path: "./tests/test.png"})

    // Screenshot Default Full Page
    //await t.takeScreenshot({fullPage : true});

    // Screenshot Target Specific Element
    //await t.takeElementScreenshot(submit_button);

    // Enter Username
    var username = "dgradmin@yopmail.com";
    await t.typeText(username_input, username);

    // Enter Password
    var password = "password1";
    await t.typeText(password_input, password);

    // Wait Test for Few Seconds
    await t.wait(3000);

    // Click Submit Button
    await t.click(login_button);

    // Expect the Results (Assertion)
    await t.expect(Selector(".nav-link.px-3.dropdown-toggle").innerText).contains('Dashboard');

})
