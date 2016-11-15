import { Component, Input, Output, OnInit, EventEmitter, ChangeDetectionStrategy, ViewChild, HostBinding, ElementRef, Renderer, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'panel',
    template: require('./panel.component.html'),
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent implements OnInit {
    @HostBinding('attr.layout') layout = 'column';

    @Input() title: string;
    @Input() padding: boolean = true;
    @Input() scrollable: boolean = false;
    @Input() titleCenter: boolean = false;
    @Input() hideFooter: boolean = true;
    @Input() hideHeader: boolean = false;
    @HostBinding('class.shadow') @Input() closable: boolean = true;
    @Input() height: number | string;
    @Input() collapsable: boolean = false;
    @Input() collapsed: boolean = false;
    @Input() bodyClass: string = 'bg-light';

    @Output() close = new EventEmitter<any>();
    @Output() resized = new EventEmitter<number>();
    @Output() stateChange = new EventEmitter<any>();

    @HostBinding('class.fullscreen') fullscreen: boolean = false;
    @HostBinding('class.collapsed') isCollapsed = false;
    private state: string = 'opened';

    constructor(private elementRef: ElementRef, private renderer: Renderer, private cd: ChangeDetectorRef) { }

    ngOnInit() {
        if (this.height === '100%') {
            this.fullscreen = true;
        }
        if (this.collapsed) {
            this.toggleState();
        }
    }

    onCloseClick(event?: Event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }
        this.close.emit(null);
    }

    scrollToTop() {
        if (this.slimscroll) {
            this.slimscroll.scrollToTop();
        }
    }

    setPanelStyle(property: string, value: string) {
        this.renderer.setElementStyle(this.elementRef.nativeElement, property, value);
    }

    isOpen() {
        return this.state === 'opened';
    }

    onResize() {
        this.resized.emit(this.getHeight());
    }

    toggleState() {
        this.state = this.state === 'opened' ? 'closed' : 'opened';
        this.isCollapsed = this.state === 'closed';
        this.stateChange.emit(this.state);
        this.cd.markForCheck();
    }
}