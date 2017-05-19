import { WorkerServiceConsumer } from "./../../worker-service.consumer";
import { Component } from '@angular/core';

@Component({
	selector: 'generate-impl-prd-form',
	templateUrl: './generate-impl-prd-form.component.html',
	styleUrls: ['/app.component.css']
})
export class GenerateImplPrdFormStub {

	private map: {
		
		isImpl?: boolean,
		
		isPrd?: boolean,
		
		capa?: string,
		
		negocio?: string,
		
		localizacion?: string,
		
		backend?: string,
		
		objetoDeDatos?: string,
		
		interfazPackage?: string,
		
		operacionComando?: string,
		
		versionServicio?: string,
		
		versionWSDL?: string,
		
		versionXSDReq?: string,
		
		versionXSDResp?: string,
		
	};
	
	private postSubmitProcess: any = {
		
		backend: [{"stringOperation":"allUpperCase"}],
		
		objetoDeDatos: [{"stringOperation":"allLowerCase"},{"stringOperation":"blanksToCamelCase"},{"stringOperation":"startWithUpperCase"}],
		
		versionServicio: [{"stringOperation":"startWithLowerCase"}],
		
		versionWSDL: [{"stringOperation":"startWithLowerCase"}],
		
		versionXSDReq: [{"stringOperation":"startWithLowerCase"}],
		
		versionXSDResp: [{"stringOperation":"startWithLowerCase"}],
		
	}
	constructor (private workerServiceconsumer: WorkerServiceConsumer){
		this.map = {
			
			isImpl: true,
			
			isPrd: false,
			
			capa: "OSB",
			
		};
	}

	public generateImplPrd() {
		this.workerServiceconsumer.invoke("fal-osb-gen", "generateImplPrd", this.map, this.postSubmitProcess);
	};


}