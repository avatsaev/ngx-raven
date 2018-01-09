import {Component, OnInit} from'@angular/core';

@Component({
  selector: 'app-root',
  template: ``,
  styles: [``]
})
export class AppComponent implements OnInit{
  errorProvoker: any;


  ngOnInit() {
    this.errorProvoker.testErr();
  }

}
