import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentTestComponent } from './my-component-test/my-component-test.component';
import { MyComponentContactusComponent } from './my-component-contactus/my-component-contactus.component';
import { MyComponentAboutmeComponent } from './my-component-aboutme/my-component-aboutme.component';
import { AppRoutingModule } from './app-routing.module';
import { SampletemplateComponent } from './sampletemplate/sampletemplate.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './shared/components/person/person.component';
import { PersonSorterPipe } from './shared/person-sorter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentTestComponent,
    MyComponentContactusComponent,
    MyComponentAboutmeComponent,
    SampletemplateComponent,
    PersonComponent,
    PersonSorterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
