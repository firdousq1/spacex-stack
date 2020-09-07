import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'spacex-item',
  templateUrl: './spacex-item.component.html',
  styleUrls: ['./spacex-item.component.css']
})
export class SpacexItemComponent implements OnInit {

  @Input() spaceItem;
  constructor() { }

  ngOnInit(): void {
  }

}
