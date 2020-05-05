import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithDefaultComponent } from './with-default.component';

describe('WithDefaultComponent', () => {
  let component: WithDefaultComponent;
  let fixture: ComponentFixture<WithDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
