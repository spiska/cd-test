import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pocitadlo',
  templateUrl: './pocitadlo.component.html',
  styleUrls: ['./pocitadlo.component.scss']
})
export class PocitadloComponent implements OnInit {
  public value: number = 0;

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.value++;
    }, 1000);
  }

}
