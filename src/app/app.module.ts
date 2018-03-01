import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RavenModule} from 'ngx-raven';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RavenModule.forRoot({
      dsn: '__PUBLIC_DSN__',
      enabled: false,
      reportDialog: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
