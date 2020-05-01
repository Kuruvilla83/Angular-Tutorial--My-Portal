import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentTestComponent } from './my-component-test/my-component-test.component';
import { MyComponentContactusComponent } from './my-component-contactus/my-component-contactus.component';
import { MyComponentAboutmeComponent } from './my-component-aboutme/my-component-aboutme.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentTestComponent,
    MyComponentContactusComponent,
    MyComponentAboutmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
