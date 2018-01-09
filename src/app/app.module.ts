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
      dsn: 'PUBLIC_DSN',
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
