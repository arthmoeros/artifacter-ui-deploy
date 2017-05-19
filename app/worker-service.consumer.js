"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var fileSaver = require("file-saver");
var post_submit_processor_1 = require("./post-submit.processor");
var WorkerServiceConsumer = (function () {
    function WorkerServiceConsumer(http) {
        this.http = http;
    }
    WorkerServiceConsumer.prototype.invoke = function (generator, formFunction, map, postSubmitProcess) {
        map = JSON.parse(JSON.stringify(map));
        for (var key in postSubmitProcess) {
            var value = map[key];
            var postSubmit = postSubmitProcess[key];
            map[key] = new post_submit_processor_1.PostSubmitProcessor(value, postSubmit).run();
        }
        var jsonRequest = {};
        jsonRequest.generator = generator;
        jsonRequest.formFunction = formFunction;
        jsonRequest.map = map;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, responseType: http_1.ResponseContentType.Blob });
        var obs = this.http.post("http://localhost:8080/artifactGenerationRequest", JSON.stringify(jsonRequest), options);
        obs.subscribe(function (response) {
            fileSaver(response.blob(), "result.zip");
        });
    };
    return WorkerServiceConsumer;
}());
WorkerServiceConsumer = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WorkerServiceConsumer);
exports.WorkerServiceConsumer = WorkerServiceConsumer;
//# sourceMappingURL=worker-service.consumer.js.map