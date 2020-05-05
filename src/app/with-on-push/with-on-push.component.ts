import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-with-on-push',
  templateUrl: './with-on-push.component.html',
  styleUrls: ['./with-on-push.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WithOnPushComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
