import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'chart-panel',
    template: require('./chart-panel.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartPanelComponent {
	foo: number = 1;
	bar: number = 1;
	@Input() definition: string;
}