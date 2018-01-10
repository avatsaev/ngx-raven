import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RavenModule} from 'ngx-raven';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RavenModule.forRoot({
      dsn: 'http://2868ac58876449b2a51367a3f8428aca@192.168.124.59:9995/3',
      enabled: true,
      reportDialog: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
