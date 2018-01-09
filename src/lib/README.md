
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

# NgxRaven

Angular wrapper for [Sentry's](https://sentry.io/)  [RavenJS](https://github.com/getsentry/raven-js)


## Installation

`npm i -S ngx-raven raven-js`

## Usage

```typescript

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {environment} from '../environments/environment';

import {RavenModule} from 'ngx-raven';

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
  bootstrap: [AppComponent]
})
export class AppModule { }

```
