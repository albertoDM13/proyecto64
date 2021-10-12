import { Component, Input } from '@angular/core';

@Component({
  selector: 'div-content',
  template: '<div class={{styless}}></div>',
  styleUrls: ['./div.styless.css'],
})
export class divComponent {
  @Input() styless = '';
}
