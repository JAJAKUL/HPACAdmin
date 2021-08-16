import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeInspectorDetailsComponent } from './home-inspector-details.component';

describe('HomeInspectorDetailsComponent', () => {
  let component: HomeInspectorDetailsComponent;
  let fixture: ComponentFixture<HomeInspectorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeInspectorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeInspectorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
