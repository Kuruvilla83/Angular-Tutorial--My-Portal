import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { MyComponentContactusComponent } from './my-component-contactus/my-component-contactus.component';
import { MyComponentAboutmeComponent } from './my-component-aboutme/my-component-aboutme.component';
import {Routes, RouterModule} from '@angular/router';
import { MyComponentTestComponent } from './my-component-test/my-component-test.component';
import { SampletemplateComponent } from './sampletemplate/sampletemplate.component';


const routes: Routes = [  
  { path: 'home', component: MyComponentTestComponent },  
  { path: 'contactus', component: MyComponentContactusComponent },  
  { path: 'about', component: MyComponentAboutmeComponent },  
  { path: 'dashboard', component: SampletemplateComponent },  
]; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
      exports: [RouterModule]
})
export class AppRoutingModule { }
