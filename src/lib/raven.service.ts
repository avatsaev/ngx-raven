import {Injectable} from '@angular/core';

import * as Raven from 'raven-js';
import {RavenStatic} from 'raven-js';
import {RavenConfig} from './raven-config';


@Injectable()
export class RavenService {

  raven: RavenStatic;

  constructor(private ravenConfig: RavenConfig) {

    if (this.ravenConfig.enabled === undefined || this.ravenConfig.enabled === null) {
      this.ravenConfig.enabled = true;
    }

    this.raven = Raven.config.bind(Raven)(ravenConfig.dsn).install.bind(Raven)();
  }
}
