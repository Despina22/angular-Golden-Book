import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCategoryColor]',
})
export class CategoryColorDirective implements OnInit {
  @Input('appCategoryColor') category: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    switch (this.category) {
      case 'General':
        this.setStyles('rgb(242, 239, 220)', 'rgb(22, 15, 9)');
        break;
      case 'Psychology':
        this.setStyles('white', 'red');
        break;
      case "Children's Action":
        this.setStyles('pink', 'blue');
        break;
      case 'Literary':
        this.setStyles('green', 'yellow');
        break;
      default:
        this.setStyles(null, null);
        break;
    }
  }

  setStyles(backgroundColor: string, textColor: string) {
    const styles = {
      'background-color': backgroundColor,
      color: textColor,
    };
    Object.assign(this.elementRef.nativeElement.style, styles);
  }
}
