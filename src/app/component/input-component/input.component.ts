import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-component',
  template: `<input value={{val}} class={{clase}}/>`,
  styleUrls: [`input.component.css`],
})
export class inputComponent {
  @Input() clase = '';
  @Input() val = '';
}
