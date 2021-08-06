import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRealtorsComponent } from './manage-realtors.component';

describe('ManageRealtorsComponent', () => {
  let component: ManageRealtorsComponent;
  let fixture: ComponentFixture<ManageRealtorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRealtorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRealtorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
