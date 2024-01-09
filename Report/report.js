$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Deer.feature");
formatter.feature({
  "name": "To validate the login functionality of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature1"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximise window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLoginPage.to_launch_the_chrome_browser_and_maximise_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate login with valid username and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "To launch the url of the facebook application",
  "keyword": "When "
});
formatter.match({
  "location": "FbLoginPage.to_launch_the_url_of_the_facebook_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass valid username in email field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPage.to_pass_valid_username_in_email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To pass invalid password in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPage.to_pass_invalid_password_in_password_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPage.to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To check whether navigate to the home page or not",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPage.to_check_whether_navigate_to_the_home_page_or_not()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLoginPage.to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To validate the positive and combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.step({
  "name": "User has to pass the data \"\u003cemaildatas\u003e\" in email field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to pass the data \"\u003cpassworddatas\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "emaildatas",
        "passworddatas"
      ]
    },
    {
      "cells": [
        "dhanusha3021@gmail.com",
        "samaira123"
      ]
    },
    {
      "cells": [
        "krishi@gmail.com",
        "12345"
      ]
    },
    {
      "cells": [
        "sammy@gmail.com",
        "rits"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximise window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLoginPage.to_launch_the_chrome_browser_and_maximise_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"dhanusha3021@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"samaira123\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximise window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLoginPage.to_launch_the_chrome_browser_and_maximise_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"krishi@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"12345\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "To launch the chrome browser and maximise window",
  "keyword": "Given "
});
formatter.match({
  "location": "FbLoginPage.to_launch_the_chrome_browser_and_maximise_window()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To validate the positive and combination of login functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Feature1"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User has to hit the facebook url",
  "keyword": "When "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_hit_the_facebook_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"sammy@gmail.com\" in email field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_pass_the_data_in_email_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to pass the data \"rits\" in password field",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_pass_the_data_in_password_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User has to close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "FbLoginPageOne.user_has_to_close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Duck.feature");
formatter.feature({
  "name": "To validate the account creation of fb application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Feature2"
    }
  ]
});
formatter.scenario({
  "name": "To create new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Feature2"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "To launch the browser and maximise window",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To launch the url fb application",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To click the create new account button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To pass first name in firstname text box",
  "rows": [
    {
      "cells": [
        "firstname1",
        "Krishika"
      ]
    },
    {
      "cells": [
        "firstname2",
        "Samaira"
      ]
    },
    {
      "cells": [
        "firstname3",
        "Sasvika"
      ]
    },
    {
      "cells": [
        "firstname4",
        "Vijay"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To pass secondname in secondname text box",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To pass mobileno or email in email text box",
  "rows": [
    {
      "cells": [
        "password1",
        "password2",
        "password3"
      ]
    },
    {
      "cells": [
        "sammy",
        "sharma",
        "80987"
      ]
    },
    {
      "cells": [
        "cvghh",
        "dfdffdf",
        "23456"
      ]
    },
    {
      "cells": [
        "dfdfd",
        "2345645",
        "rfgrtg"
      ]
    },
    {
      "cells": [
        "fgddfg",
        "34564f",
        "3456ff"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To create new password using new password text box",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "To close the chrome browser",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});