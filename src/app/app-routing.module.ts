import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GeneratorIndexComponent } from './generated/generator-index.component';

import { FalOSBComponentsStub } from './generated/fal-osb-components/fal-osb-components-main.component';

import { GenerateExpCompFormStub } from './generated/fal-osb-components/generate-exp-comp-form.component';

import { GenerateImplPrdFormStub } from './generated/fal-osb-components/generate-impl-prd-form.component';

import { GenReqFileFormStub } from './generated/common-gen/gen-req-file-form.component';

import { SampleXMLArchOSBStub } from './generated/sample-xml-arch-osb/sample-xml-arch-osb-main.component';

import { SampleFormOneStub } from './generated/sample-xml-arch-osb/sample-form-one.component';


const routes: Routes = [
    { path: '', redirectTo: '/generator-index', pathMatch: 'full' },
    { path: 'generator-index', component: GeneratorIndexComponent },

    { path: 'fal-osb-components', component: FalOSBComponentsStub,
		children: [
			
			{ path: 'generate-exp-comp-form', component: GenerateExpCompFormStub },
			
			{ path: 'generate-impl-prd-form', component: GenerateImplPrdFormStub },
			
			{ path: 'gen-req-file-form', component: GenReqFileFormStub },
			
		]
	},

    { path: 'sample-xml-arch-osb', component: SampleXMLArchOSBStub,
		children: [
			
			{ path: 'sample-form-one', component: SampleFormOneStub },
			
			{ path: 'gen-req-file-form', component: GenReqFileFormStub },
			
		]
	},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }