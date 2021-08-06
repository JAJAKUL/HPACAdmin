import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHomeinspectComponent } from './manage-homeinspect.component';

describe('ManageHomeinspectComponent', () => {
  let component: ManageHomeinspectComponent;
  let fixture: ComponentFixture<ManageHomeinspectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageHomeinspectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHomeinspectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
