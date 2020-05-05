import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocitadloComponent } from './pocitadlo.component';

describe('PocitadloComponent', () => {
  let component: PocitadloComponent;
  let fixture: ComponentFixture<PocitadloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocitadloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocitadloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
