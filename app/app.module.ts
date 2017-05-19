import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component'
import { GeneratorIndexComponent } from './generated/generator-index.component';
import { WorkerServiceConsumer } from './worker-service.consumer';

import { FalOSBComponentsStub } from './generated/fal-osb-components/fal-osb-components-main.component';

import { GenerateExpCompFormStub } from './generated/fal-osb-components/generate-exp-comp-form.component';

import { GenerateImplPrdFormStub } from './generated/fal-osb-components/generate-impl-prd-form.component';

import { GenReqFileFormStub } from './generated/common-gen/gen-req-file-form.component';

import { SampleXMLArchOSBStub } from './generated/sample-xml-arch-osb/sample-xml-arch-osb-main.component';

import { SampleFormOneStub } from './generated/sample-xml-arch-osb/sample-form-one.component';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    GeneratorIndexComponent,
    
    FalOSBComponentsStub,
    
    GenerateExpCompFormStub,
    
    GenerateImplPrdFormStub,
    
    GenReqFileFormStub,
    
    SampleXMLArchOSBStub,
    
    SampleFormOneStub,
    
  ],
  bootstrap: [AppComponent],
  providers: [
    WorkerServiceConsumer
  ]
})


export class AppModule { }
