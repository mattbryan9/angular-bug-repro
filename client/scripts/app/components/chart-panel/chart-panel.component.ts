import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'chart-panel',
    styles: [require('./chart-panel.component.scss').toString()],
    template: require('./chart-panel.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartPanelComponent {
	foo: number = 1;
	bar: number = 1;
	@Input() definition: string;
}