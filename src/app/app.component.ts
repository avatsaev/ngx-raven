import {Component, OnInit} from'@angular/core';
import {RavenService} from 'ngx-raven';

@Component({
  selector: 'app-root',
  template: ``,
  styles: [``]
})
export class AppComponent implements OnInit{
  errorProvoker: any;


  constructor(private raven: RavenService) {}


  ngOnInit() {
    this.errorProvoker.testErr();
  }

}
