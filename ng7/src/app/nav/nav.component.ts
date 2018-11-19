import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  //TypeScript syntax
  appTitle: string = 'myapp';

  //JavaScript syntax - Works too
  // appTitle = 'myapp';

  constructor() { }

  ngOnInit() {
  }

}
