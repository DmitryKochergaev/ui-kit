import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RippleButtonComponent } from './ripple-button/ripple-button.component';
import { RippleButtonDirective } from './ripple-button/ripple-button.directive';

@NgModule({
  declarations: [
    RippleButtonComponent,
    RippleButtonDirective,
  ],
  exports: [
    RippleButtonComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
})
export class UiKitModule {
}
