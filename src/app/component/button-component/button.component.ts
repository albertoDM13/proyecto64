import { Component, Input } from '@angular/core';

@Component({
  selector: 'button-component',
  template: `<input type='button' value={{text}} class={{styless}}/>`,
  styleUrls: [`./button.component.css`],
})
export class buttonComponent {
  @Input() text = '';
  @Input() styless = '';
 }
