import { Directive, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
})
export class ScrollRevealDirective implements OnInit {
  private element = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(entry.target, 'show');
          }
        });
      },
      { threshold: 0.15 },
    );

    observer.observe(this.element.nativeElement);
  }
}
