const properties = require('./nightwatch.props')
module.exports = {
    "src_folders" : "tests", 
    "page_objects_path" : "pageObjects", 
    "selenium" : {
      "start_process" : true,
      "server_path" : properties.resourcePath + properties.seleniumServer,
      "log_path" : "",
      "port" : 4445,
      "cli_args" : {
        "webdriver.chrome.driver": properties.resourcePath + properties.chromedriver,
        "webdriver.geko.driver": properties.resourcePath + properties.gekodriver,
        "webdriver.edge.driver": properties.resourcePath + properties.edgedriver,
      }
    },
  
    "test_settings" : {
      "default" : {
        "launch_url" : "http://localhost",
        "selenium_port"  : 4445,
        "selenium_host"  : "localhost",
        "silent": true,
        "test_workers":true,
        "screenshots" : {
          "enabled" : false,
          "path" : ""
        },
        "desiredCapabilities": {
          "browserName": "chrome",
        }
      },

      "chromeMobile":{
        "desiredCapabilities": {
          "browserName": "chrome",
          "chromeOptions": {
            "args": [
              "window-size=400,800"
            ]
          }
        }
      },
  
      "firefox" : {
        "desiredCapabilities": {
          "browserName": "firefox",
          "marionette": true
        }
      },
  
      "edge" : {
        "desiredCapabilities": {
          "browserName": "MicrosoftEdge"
        }
      }
    }
  }