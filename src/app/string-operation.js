"use strict";
var common_1 = require("@artifacter/common");
var StringOperation = (function () {
    function StringOperation(stringOperation) {
        this.operation = this[stringOperation];
    }
    StringOperation.prototype.run = function (inputStr) {
        return this.operation(inputStr);
    };
    StringOperation.prototype.allLowerCase = function (str) {
        return str.toLowerCase();
    };
    StringOperation.prototype.allUpperCase = function (str) {
        return str.toUpperCase();
    };
    StringOperation.prototype.startWithUpperCase = function (str) {
        return str.charAt(0).toUpperCase() + str.substr(1);
    };
    StringOperation.prototype.startWithLowerCase = function (str) {
        return str.charAt(0).toLowerCase() + str.substr(1);
    };
    StringOperation.prototype.blanksToCamelCase = function (str) {
        var _this = this;
        var words = str.split(" ");
        if (words.length <= 1) {
            return str;
        }
        else {
            var camelCase_1 = new common_1.StringContainer();
            var firstLoop_1 = true;
            words.forEach(function (word) {
                if (firstLoop_1) {
                    camelCase_1.append(word);
                    firstLoop_1 = false;
                }
                else {
                    camelCase_1.append(_this.startWithUpperCase(word));
                }
            });
            return camelCase_1.toString();
        }
    };
    return StringOperation;
}());
exports.StringOperation = StringOperation;
//# sourceMappingURL=string-operation.js.map