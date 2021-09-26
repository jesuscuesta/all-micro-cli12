import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMonoAppModule } from '../../projects/mono-app/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMonoAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
