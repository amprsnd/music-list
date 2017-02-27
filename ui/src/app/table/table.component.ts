import { Component } from '@angular/core';

@Component({
  selector: 'playlist',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  params = [
    {title: 'Artist', sort: 'down'},
    {title: 'Title',  sort: 'down'},
    {title: 'Genre',  sort: 'down'},
    {title: 'Year',   sort: 'down'}
  ];

  filterBy(param, direction) {
    console.log('Filter by: ' + param + ' / ' + direction);
  }

}
