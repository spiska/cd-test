import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-lazy-wrapper',
  templateUrl: './lazy-wrapper.component.html',
  styleUrls: ['./lazy-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
