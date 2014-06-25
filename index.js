var _ = require("lodash"),
    fs = require("fs"),
    requirejs = require("requirejs"),
    harString = "";

if (process.argv.length !== 3) {
    process.abort();
}


requirejs(["HARParser", "text!sinon_fake_server.hb", "config"], function (harParser, testTemplate, config) {
   fs.readFile(process.argv[2], function (error, harString) {
        var outputFile = process.argv[2].replace(/hars\/(.*).har/, config.outputLocation + "/$1.js");
        fs.writeFile(outputFile, harParser.parse(testTemplate, JSON.parse(harString)));
    });

});
