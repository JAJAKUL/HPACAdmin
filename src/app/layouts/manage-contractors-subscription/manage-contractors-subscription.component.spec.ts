import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageContractorsSubscriptionComponent } from './manage-contractors-subscription.component';

describe('ManageContractorsSubscriptionComponent', () => {
  let component: ManageContractorsSubscriptionComponent;
  let fixture: ComponentFixture<ManageContractorsSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageContractorsSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageContractorsSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
