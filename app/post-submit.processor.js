"use strict";
var string_operation_1 = require("./string-operation");
var PostSubmitProcessor = (function () {
    function PostSubmitProcessor(value, postSubmit) {
        var _this = this;
        this.value = value;
        this.stringOperations = new Array();
        postSubmit.forEach(function (elem) {
            var stringOperation = new string_operation_1.StringOperation(elem.stringOperation);
            _this.stringOperations.push(stringOperation);
        });
    }
    PostSubmitProcessor.prototype.run = function () {
        var result = this.value;
        this.stringOperations.forEach(function (stringOperation) {
            result = stringOperation.run(result);
        });
        return result;
    };
    return PostSubmitProcessor;
}());
exports.PostSubmitProcessor = PostSubmitProcessor;
//# sourceMappingURL=post-submit.processor.js.map