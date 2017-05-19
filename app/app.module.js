"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var generator_index_component_1 = require("./generated/generator-index.component");
var worker_service_consumer_1 = require("./worker-service.consumer");
var fal_osb_components_main_component_1 = require("./generated/fal-osb-components/fal-osb-components-main.component");
var generate_exp_comp_form_component_1 = require("./generated/fal-osb-components/generate-exp-comp-form.component");
var generate_impl_prd_form_component_1 = require("./generated/fal-osb-components/generate-impl-prd-form.component");
var gen_req_file_form_component_1 = require("./generated/common-gen/gen-req-file-form.component");
var sample_xml_arch_osb_main_component_1 = require("./generated/sample-xml-arch-osb/sample-xml-arch-osb-main.component");
var sample_form_one_component_1 = require("./generated/sample-xml-arch-osb/sample-form-one.component");
var app_routing_module_1 = require("./app-routing.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            generator_index_component_1.GeneratorIndexComponent,
            fal_osb_components_main_component_1.FalOSBComponentsStub,
            generate_exp_comp_form_component_1.GenerateExpCompFormStub,
            generate_impl_prd_form_component_1.GenerateImplPrdFormStub,
            gen_req_file_form_component_1.GenReqFileFormStub,
            sample_xml_arch_osb_main_component_1.SampleXMLArchOSBStub,
            sample_form_one_component_1.SampleFormOneStub,
        ],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            worker_service_consumer_1.WorkerServiceConsumer
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map