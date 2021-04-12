import { Component, OnInit } from '@angular/core';
import { DragndropDirective } from 'src/app/directives/dragndrop.directive';

@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.component.html',
  styleUrls: ['./dragndrop.component.css'],
})
export class DragndropComponent implements OnInit {
  files: any = [];

  constructor() {}

  ngOnInit(): void {}

  fileBrowseHandler(event: any) {
    debugger;
    console.log('Hi guys.... this is working');
    console.log(event);
    this.files = [];
    for (var i = 0; i < event.length; i++) {
      this.files.push(event[i]);
    }
  }
}
