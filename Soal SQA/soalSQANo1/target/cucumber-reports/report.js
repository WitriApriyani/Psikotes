$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featuresFiles/features.feature");
formatter.feature({
  "name": "Check string palindrome",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \u003ckata\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.step({
  "name": "hasilnya harus \u003coutput\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "kata",
        "output"
      ]
    },
    {
      "cells": [
        "\"okok\"",
        "\"false\""
      ]
    },
    {
      "cells": [
        "\"bobob\"",
        "\"true\""
      ]
    },
    {
      "cells": [
        "\"bebeb\"",
        "\"true\""
      ]
    },
    {
      "cells": [
        "\"baik\"",
        "\"false\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \"okok\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.saya_masukin_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \"bobob\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.saya_masukin_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \"bebeb\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.saya_masukin_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"true\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Periksa string palindrome",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Saya masukin string \"baik\"",
  "keyword": "Given "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.saya_masukin_string(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Saya test apakah palindrome",
  "keyword": "When "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.saya_test_apakah_palindrome()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hasilnya harus \"false\"",
  "keyword": "Then "
});
formatter.match({
  "location": "definitions.PalindromeDefinition.hasilnya_harus(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
});