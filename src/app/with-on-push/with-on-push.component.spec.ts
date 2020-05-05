import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithOnPushComponent } from './with-on-push.component';

describe('WithOnPushComponent', () => {
  let component: WithOnPushComponent;
  let fixture: ComponentFixture<WithOnPushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithOnPushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithOnPushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
