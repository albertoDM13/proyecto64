import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { frameComponent } from './component/input-component/frame.component';
import { inputComponent } from './component/input-component/input.component';
import { buttonComponent } from './component/button-component/button.component';
import { divComponent } from './component/div-component/div.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [frameComponent, inputComponent, buttonComponent, divComponent],
  bootstrap: [frameComponent, inputComponent, buttonComponent, divComponent],
})
export class AppModule {}
