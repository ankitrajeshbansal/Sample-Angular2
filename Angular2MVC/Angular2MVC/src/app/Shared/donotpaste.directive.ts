import {
    Directive,
    ElementRef,
    Renderer,
    HostListener,
    HostBinding
} from "@angular/core";

@Directive({
    selector: '[donotpaste]'
})

export class DonotPasteDirective {
    @HostListener('keydown', ['$event']) keydown(eventData: KeyboardEvent) {
        if (eventData.ctrlKey == true && (eventData.which == 118 || eventData.which == 86)) {
            this.backgroundColor = 'pink';
            setTimeout(() => {
                this.backgroundColor = 'white';
            }, 500);
            eventData.preventDefault();
        }
    }

    @HostBinding('style.backgroundColor') backgroundColor: string;
    
    constructor(private elementRef: ElementRef, private renderer: Renderer) {}
}