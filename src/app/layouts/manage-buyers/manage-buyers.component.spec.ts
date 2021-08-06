import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBuyersComponent } from './manage-buyers.component';

describe('ManageBuyersComponent', () => {
  let component: ManageBuyersComponent;
  let fixture: ComponentFixture<ManageBuyersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBuyersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBuyersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
