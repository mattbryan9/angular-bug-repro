import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'main',
    template: require('./main.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
	chartDefinition: any = {showAs: 'grid'};
}