import {ErrorHandler, Injectable} from '@angular/core';

import {RavenService} from './raven.service';
import {RavenConfig} from './raven-config';
import * as Raven from 'raven-js';

@Injectable()
export class RavenErrorHandler implements ErrorHandler {

  constructor(private ravenService: RavenService, private ravenConfig: RavenConfig) {}

  handleError(err: any) {

    console.error(err);

    if (this.ravenConfig.reportDialog === undefined || this.ravenConfig.reportDialog === null) {
      this.ravenConfig.reportDialog = false;
    }

    this.ravenService.raven.captureException.bind(Raven)(err);

    if (this.ravenConfig.reportDialog) {
      this.ravenService.raven.showReportDialog.bind(Raven)();
    }

  }
}
