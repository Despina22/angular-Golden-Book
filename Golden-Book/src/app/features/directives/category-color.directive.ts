import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/shared/enums/category.enum';

@Directive({
  selector: '[appCategoryColor]',
})
export class CategoryColorDirective implements OnInit {
  @Input('appCategoryColor') category: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    switch (this.category) {
      case Category.SCIENCE:
        this.setStyles('rgb(242, 239, 220)', 'rgb(22, 15, 9)');
        break;
      case Category.HISTORY:
        this.setStyles('white', 'red');
        break;
      case Category.CHILDRENACTION:
        this.setStyles('pink', 'blue');
        break;
      case Category.LITERARY:
        this.setStyles('green', 'yellow');
        break;
      case Category.PSYCHOLOGY:
        this.setStyles('green', 'red');
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
