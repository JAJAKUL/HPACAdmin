import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectorsDashboardComponent } from './inspectors-dashboard.component';

describe('InspectorsDashboardComponent', () => {
  let component: InspectorsDashboardComponent;
  let fixture: ComponentFixture<InspectorsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspectorsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectorsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
