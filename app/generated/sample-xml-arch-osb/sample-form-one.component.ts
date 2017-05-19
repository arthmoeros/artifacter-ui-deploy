import { WorkerServiceConsumer } from "./../../worker-service.consumer";
import { Component } from '@angular/core';

@Component({
	selector: 'sample-form-one',
	templateUrl: './sample-form-one.component.html',
	styleUrls: ['/app.component.css']
})
export class SampleFormOneStub {

	private map: {
		
		additionalFolders?: boolean,
		
		bizDomain?: string,
		
		bizEntity?: string,
		
		serviceId?: string,
		
		serviceName?: string,
		
		serviceVersion?: string,
		
		serviceType?: string,
		
	};
	
	private postSubmitProcess: any = {
		
		bizEntity: [{"stringOperation":"allLowerCase"},{"stringOperation":"blanksToCamelCase"},{"stringOperation":"startWithUpperCase"}],
		
		serviceName: [{"stringOperation":"allLowerCase"},{"stringOperation":"blanksToCamelCase"},{"stringOperation":"startWithUpperCase"}],
		
		serviceVersion: [{"stringOperation":"allLowerCase"}],
		
	}
	constructor (private workerServiceconsumer: WorkerServiceConsumer){
		this.map = {
			
			additionalFolders: true,
			
			bizDomain: "General",
			
		};
	}

	public generateSampleArchOSB1() {
		this.workerServiceconsumer.invoke("sample-arch-osb-gen", "generateSampleArchOSB1", this.map, this.postSubmitProcess);
	};


}