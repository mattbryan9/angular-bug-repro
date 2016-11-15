import { TestBed } from '@angular/core/testing';
import { ChartPanelComponent } from './chart-panel.component';

describe('Module: docs', () => {
    describe('Component: ChartPanelComponent', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [ChartPanelComponent],
                providers: [],
                imports: []
            });
        });

        it('should be defined', () => {
            const fixture = TestBed.createComponent(ChartPanelComponent);
            fixture.detectChanges();
            let element = fixture.debugElement.nativeElement;
            let cmpInstance = fixture.debugElement.componentInstance;
            expect(cmpInstance).toBeDefined();
            expect(element).toBeDefined();
        });

    });
});