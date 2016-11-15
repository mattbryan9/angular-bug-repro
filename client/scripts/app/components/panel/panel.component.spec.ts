import { TestBed } from '@angular/core/testing';
import { PanelComponent } from './panel.component';

describe('Module: docs', () => {
    describe('Component: PanelComponent', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [PanelComponent],
                providers: [],
                imports: []
            });
        });

        it('should be defined', () => {
            const fixture = TestBed.createComponent(PanelComponent);
            fixture.detectChanges();
            let element = fixture.debugElement.nativeElement;
            let cmpInstance = fixture.debugElement.componentInstance;
            expect(cmpInstance).toBeDefined();
            expect(element).toBeDefined();
        });

    });
});