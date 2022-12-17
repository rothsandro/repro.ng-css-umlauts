import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShadowDomComponent } from './shadow-dom/shadow-dom.component';

@NgModule({
  declarations: [
    AppComponent,
    ShadowDomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
