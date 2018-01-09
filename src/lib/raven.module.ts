import {ErrorHandler, ModuleWithProviders, NgModule} from '@angular/core';
import * as Raven from 'raven-js';

export class RavenConfig {
  dsn: string;
  enabled?: boolean;
}

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any) {
    Raven.captureException.bind(Raven)(err);
  }
}

@NgModule()
export class RavenModule {
  static forRoot(config: RavenConfig): ModuleWithProviders {

    if (!(config as Object).hasOwnProperty('enabled')) {
      config.enabled = true;
    }

    if ( config.enabled ) {
      Raven
        .config.bind(Raven)(config.dsn)
        .install.bind(Raven)();
    }

    return {
      ngModule: RavenModule,
      providers: [
        {provide: RavenConfig, useValue: config},
        config.enabled ? {provide: ErrorHandler, useClass: RavenErrorHandler} : []
      ]
    };
  }
}
