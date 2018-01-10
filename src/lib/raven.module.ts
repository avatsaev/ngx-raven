import {ErrorHandler, ModuleWithProviders, NgModule} from '@angular/core';

import {RavenService} from './raven.service';
import {RavenErrorHandler} from './raven.error-handler';
import {RavenConfig} from './raven-config';

@NgModule()
export class RavenModule {
  static forRoot(config: RavenConfig): ModuleWithProviders {


    return {
      ngModule: RavenModule,
      providers: [
        {provide: RavenConfig, useValue: config},
        RavenService,
        config.enabled ? {provide: ErrorHandler, useClass: RavenErrorHandler} : [],
      ]
    };
  }
}
