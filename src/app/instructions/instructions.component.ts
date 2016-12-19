import { Component } from '@angular/core';

@Component({
    selector: 'instructions',
    templateUrl: '../src/app/instructions/instructions.component.html'
})
export class InstructionsComponent {
    title:string = '';
    description:string = '';
}
