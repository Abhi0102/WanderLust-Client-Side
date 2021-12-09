import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperPanelComponent } from './upper-panel.component';

describe('UpperPanelComponent', () => {
  let component: UpperPanelComponent;
  let fixture: ComponentFixture<UpperPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
