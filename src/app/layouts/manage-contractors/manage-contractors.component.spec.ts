import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContractorsComponent } from './manage-contractors.component';

describe('ManageContractorsComponent', () => {
  let component: ManageContractorsComponent;
  let fixture: ComponentFixture<ManageContractorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageContractorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageContractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
