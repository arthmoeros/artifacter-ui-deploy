import { WorkerServiceConsumer } from "./../../worker-service.consumer";
import { Component } from '@angular/core';

@Component({
	selector: 'generate-exp-comp-form',
	templateUrl: './generate-exp-comp-form.component.html',
	styleUrls: ['/app.component.css']
})
export class GenerateExpCompFormStub {

	private map: {
		
		isExp?: boolean,
		
		isComp?: boolean,
		
		objetoDeNegocio?: string,
		
		entidadDiscreta?: string,
		
		operacion?: string,
		
		versionServicio?: string,
		
		negocio?: string,
		
		localizacion?: string,
		
		capa?: string,
		
		dominio?: string,
		
		versionWSDL?: string,
		
		versionXSDReq?: string,
		
		versionXSDResp?: string,
		
	};
	
	private postSubmitProcess: any = {
		
		objetoDeNegocio: [{"stringOperation":"allLowerCase"},{"stringOperation":"blanksToCamelCase"},{"stringOperation":"startWithUpperCase"}],
		
		entidadDiscreta: [{"stringOperation":"allLowerCase"},{"stringOperation":"blanksToCamelCase"},{"stringOperation":"startWithUpperCase"}],
		
		operacion: [{"stringOperation":"startWithUpperCase"}],
		
		versionServicio: [{"stringOperation":"startWithLowerCase"}],
		
		versionWSDL: [{"stringOperation":"startWithLowerCase"}],
		
		versionXSDReq: [{"stringOperation":"startWithLowerCase"}],
		
		versionXSDResp: [{"stringOperation":"startWithLowerCase"}],
		
	}
	constructor (private workerServiceconsumer: WorkerServiceConsumer){
		this.map = {
			
			isExp: true,
			
			isComp: false,
			
			capa: "OSB",
			
		};
	}

	public generateExpComp() {
		this.workerServiceconsumer.invoke("fal-osb-gen", "generateExpComp", this.map, this.postSubmitProcess);
	};


}