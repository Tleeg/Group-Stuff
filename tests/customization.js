var customObjects = {}


module.exports = {
    beforeEach: browser => {
        customObjects = browser.page.customObjects()
        customObjects.navigate()
    },
    after: browser => {
        browser.end()
    },
    '1 Customize Model S (1)': browser => {
        customObjects
        .useXpath()
        customObjects
            .waitForElementVisible('//button[contains(text(), Next)]', 10000)
            .click('//button[contains(text(), Next)]')
            .waitForElementVisible('//button[contains(text(), Next)]', 10000)
            .click('//button[contains(text(), Next)]')
            .waitForElementVisible('//button[contains(text(), Next)]', 10000)
            .click('//button[contains(text(), Next)]')
            .click('//button[contains(text(), Next)]')
        .useXpath()
            .assert.visible('//*/span[contains(text(), "Model S Long Range")]')
            .assert.visible('//*/span[contains(text(), "Red Multi-Coat")]')
            .assert.visible('//*/span[contains(text(), "Premium Interior with Dark Ash")]')
            .assert.visible('//*/span[contains(text(), "Autopilot")]')
        .useCss()
    },
    '2': browser => {
        customObjects
        .maximizeWindow()
        .useXpath()
            .click('//*/p[contains(text(), "Long Range")]')
            .assert.visible('//button[contains(text(), Next)]')
            .click('//button[contains(text(), Next)]')
        .useCss()
            .api.pause(3000)
        customObjects
            .click('[data-id="$PMNG"]')
            .click('[data-id="$WTDS"]')
        .useXpath()
            .click('//button[contains(text(), Next)]')
        .useCss()
            .click('[class="asset-loader--svg-container asset-loader-2 group--options_asset shadow"]')
        .useXpath()
            .click('//button[contains(text(), Next)]')
            .click('//button[contains(text(), Next)]')
            .assert.visible('//*/span[contains(text(), "Model S Long Range")]')
            .assert.visible('//*/span[contains(text(), "Midnight Silver Metallic")]')
            .assert.visible('//*/span[contains(text(), " Sonic Carbon Slipstream Wheels")]')
            // .assert.visible('//*/span[contains(text(), "Black and White Premium Interior with Dark Ash Wood Décor")]')
            .assert.visible('//*/span[contains(text(), "Autopilot")]')
            
    },
    // 'I hate Tesla with a burning passion': browser => {
    //     customObjects
    // .useXpath()
    //         .click('(//*[@class="group--options_block_title"])[3]')
    //         .click('//button[contains(text(), Next)]')
    //         .click('//*[@data-id="$PPSB"]')
    //         .click('//*[@data-id="$WTTC"]')
    //         .click('//button[contains(text(), Next)]')
    //         .click('//*[@data-id="$INLFC"]')
    //         .click('//button[contains(text(), Next)]')
    //         .assert.visible('//*/span[contains(text(), "Autopilot")]')
    // }
    '4': browser => {
        customObjects
            .api.resizeWindow(1920, 1080)
        customObjects
        .useCss()
            .click('[data-id="btn-navigation"]')
        .useXpath()
            .click('//*[@data-id="$PPSW"]')
            .useCss()
            .click('[data-id="btn-navigation"]')
            .click('[data-id="btn-navigation"]')
            .click('[data-id="btn-navigation"]')
            .useXpath()
            .assert.visible('//*/span[contains(text(), "Model S Long Range")]')
            .assert.visible('//*/span[contains(text(), "Pearl White Multi-Coat")]')
            .assert.visible('//*/span[contains(text(), "Slipstream Wheels")]')
            // .assert.visible('//*/span[contains(text(), "Black and White Premium Interior with Dark Ash Wood Décor")]')
            .assert.visible('//*/span[contains(text(), "Autopilot")]')
            
            
    },
    '5': browser => {
        customObjects
        .api.resizeWindow(1920, 1080)
        customObjects
        .useCss()
            .click('[data-id="btn-navigation"]')
        .useXpath()
            .click('//*[@data-id="$PPMR"]')
            .useCss()
            .click('[data-id="btn-navigation"]')
            .click('[data-id="btn-navigation"]')
            .click('[data-id="btn-navigation"]')
            .useXpath()
            .assert.visible('//*/span[contains(text(), "Model S Long Range")]')
            .assert.visible('//*/span[contains(text(), "Red Multi-Coat")]')
            .assert.visible('//*/span[contains(text(), "Slipstream Wheels")]')
            .assert.visible('//*/span[contains(text(), "Black and White Premium Interior with Dark Ash Wood Décor")]')
            .assert.visible('//*/span[contains(text(), "Autopilot")]')
            
            
    }
}