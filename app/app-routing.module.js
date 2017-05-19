"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var generator_index_component_1 = require("./generated/generator-index.component");
var fal_osb_components_main_component_1 = require("./generated/fal-osb-components/fal-osb-components-main.component");
var generate_exp_comp_form_component_1 = require("./generated/fal-osb-components/generate-exp-comp-form.component");
var generate_impl_prd_form_component_1 = require("./generated/fal-osb-components/generate-impl-prd-form.component");
var gen_req_file_form_component_1 = require("./generated/common-gen/gen-req-file-form.component");
var sample_xml_arch_osb_main_component_1 = require("./generated/sample-xml-arch-osb/sample-xml-arch-osb-main.component");
var sample_form_one_component_1 = require("./generated/sample-xml-arch-osb/sample-form-one.component");
var routes = [
    { path: '', redirectTo: '/generator-index', pathMatch: 'full' },
    { path: 'generator-index', component: generator_index_component_1.GeneratorIndexComponent },
    { path: 'fal-osb-components', component: fal_osb_components_main_component_1.FalOSBComponentsStub,
        children: [
            { path: 'generate-exp-comp-form', component: generate_exp_comp_form_component_1.GenerateExpCompFormStub },
            { path: 'generate-impl-prd-form', component: generate_impl_prd_form_component_1.GenerateImplPrdFormStub },
            { path: 'gen-req-file-form', component: gen_req_file_form_component_1.GenReqFileFormStub },
        ]
    },
    { path: 'sample-xml-arch-osb', component: sample_xml_arch_osb_main_component_1.SampleXMLArchOSBStub,
        children: [
            { path: 'sample-form-one', component: sample_form_one_component_1.SampleFormOneStub },
            { path: 'gen-req-file-form', component: gen_req_file_form_component_1.GenReqFileFormStub },
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map