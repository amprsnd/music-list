import { Component } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'per-page',
  templateUrl: './perpage.component.html'
})
export class PerpageComponent {

  perPage = [10, 25, 50, 100];

  onPerPage(perPage) {

    console.log('Show ' + perPage + ' items on page');

  }

}
