import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
    selector: '[appHightlightBackgroundColor]'
})

export class HighlightBackgroundColorDirective {
    @Input() defaultColor?: string;
    @Input() highlightColor?: string;
    

    @HostListener('mouseenter') onMouseEnter(_eventData: any){
        if(!this.highlightColor) return;
        this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') onMouseLeave(){
        if(!this.defaultColor) return;
        this.backgroundColor = this.defaultColor;
    }

    @HostBinding('style.backgroundColor') backgroundColor = this.defaultColor;
    constructor(private elementRef: ElementRef, private renderer: Renderer2 ){
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
        this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'white');
    }
}