import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiKitModule } from "../modules/ui-kit/ui-kit.module";
import { ParentComponent } from './parent/parent.component';
import { ParentAboveComponent } from './parent-above/parent-above.component';
import { TestDirectiveDirective } from './test-directive.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ParentAboveComponent,
    TestDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiKitModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
