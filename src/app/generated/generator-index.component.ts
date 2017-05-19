import { Component } from '@angular/core';

@Component({
	selector: 'generator-index',
	template: `
    <h3>{{title}}</h3>
	<ul>
		
		<li><a [routerLink]="['/fal-osb-components']">FalOSBComponents</a></li>
		
		<li><a [routerLink]="['/sample-xml-arch-osb']">SampleXMLArchOSB</a></li>
		
	</ul>
	`,
	styleUrls: ['/app.component.css']
})

export class GeneratorIndexComponent {
	title = 'Generator Index';

}