
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

# NgxRaven

Angular wrapper for [Sentry's](https://sentry.io/)  [RavenJS](https://github.com/getsentry/raven-js)


## Installation

`npm i -S ngx-raven raven-js`

## Usage

Import Raven module in your AppModule (top level module)

```typescript

import {RavenModule} from 'ngx-raven';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RavenModule.forRoot({
      dsn: '__PUBLIC_DSN__',
      reportDialog: true, // optional, false by default
      enabled: environment.production
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

Inject RavenService in your AppComponent (top level component) 

```typescript
import {RavenModule} from 'ngx-raven';

@Component({
  selector: 'app-root',
  template: ``,
  styles: [``]
})
export class AppComponent {

  constructor(private ravenService: RavenService) {}


}

```

Raven will initialize and install itself after the injection, all exceptions will be automatically sent to your Sentry server.

You can use the RavenService to access raven instance inside your components or other services


```typescript

export class AppComponent {

  constructor(private ravenService: RavenService) {
    // Check if raven is initialised and installed
    console.log(this.ravenService.raven.isSetup());
  }


}
```

You can also read the Raven Module Config at any moment by injecting it


```typescript
export class AppComponent {

  constructor(private ravenService: RavenService, private ravenConfig: RavenConfig) {
    // Check if raven is initialised
    console.log(this.ravenService.raven.isSetup());
    console.log(this.ravenConfig.dsn);
  }

}
```


