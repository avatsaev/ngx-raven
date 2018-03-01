import {Component} from '@angular/core';
import {RavenService} from 'ngx-raven';

@Component({
  selector: 'app-root',
  template: `
    <h2>NgxRaven</h2>

    <div *ngIf="ravenService.ravenConfig.enabled">
      <p>Live error reporting enabled: <b>{{ravenService.ravenConfig.enabled}}</b></p>
      <p>Raven module is setup: <b>{{ravenService.raven?.isSetup()}}</b></p>
      <p>DSN: <b>{{ravenService.ravenConfig.dsn}}</b> </p>

      <button (click)="provokeError()">Provoke an error</button>
    </div>

  `
})

export class AppComponent {
  errorProvoker: any;


  constructor(
    public ravenService: RavenService
  ) {
    console.log(this.ravenService.raven);
  }

  provokeError() {
    this.errorProvoker.testErr();
  }

}
