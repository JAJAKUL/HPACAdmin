import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHomeinspectSubscriptionComponent } from './manage-homeinspect-subscription.component';

describe('ManageHomeinspectSubscriptionComponent', () => {
  let component: ManageHomeinspectSubscriptionComponent;
  let fixture: ComponentFixture<ManageHomeinspectSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageHomeinspectSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageHomeinspectSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
