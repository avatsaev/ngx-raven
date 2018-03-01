import {Component} from '@angular/core';
import {RavenService} from 'ngx-raven';

@Component({
  selector: 'app-root',
  template: `
    <p>Live error reporting enabled: <b>{{ravenService.ravenConfig.enabled}}</b></p>
    <p>Raven module is setup: <b>{{ravenService.raven?.isSetup()}}</b></p>
    <p>DSN: <b>{{ravenService.ravenConfig.dsn}}</b> </p>

    <button (click)="provokeError()">Provoke an error</button>
  `
})

export class AppComponent {
  errorProvoker: any;


  constructor(public ravenService: RavenService) {
    console.log(this.ravenService.raven);
  }

  provokeError() {
    this.errorProvoker.testErr();
  }

}
