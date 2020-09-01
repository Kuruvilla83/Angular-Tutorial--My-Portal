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
import { PersonFilterPipe } from './shared/person-filter.pipe';
import { AddPersonComponent } from './add-person/add-person.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditPersonComponent } from './edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentTestComponent,
    MyComponentContactusComponent,
    MyComponentAboutmeComponent,
    SampletemplateComponent,
    PersonComponent,
    PersonSorterPipe,
    PersonFilterPipe,
    AddPersonComponent,
    EditPersonComponent,
  ],
  entryComponents: [EditPersonComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
