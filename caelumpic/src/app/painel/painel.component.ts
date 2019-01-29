import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './painel.component.html',
    selector: 'app-painel'
})
export class PainelComponent {
    @Input() titulo: string;
}
