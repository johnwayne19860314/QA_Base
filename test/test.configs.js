const {assert} = require("chai");
var {suite, test} = require("mocha");
const project_configs = require("../toolkits/configs");
//const {ConnectError} = require("../toolkits/error");

suite("project_configs", () => {
    test("project_configs", () => {
        console.log(project_configs)
        assert.isObject(project_configs, 'project_config load wrong')
    });
});
