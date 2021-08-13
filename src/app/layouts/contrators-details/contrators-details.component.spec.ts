import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratorsDetailsComponent } from './contrators-details.component';

describe('ContratorsDetailsComponent', () => {
  let component: ContratorsDetailsComponent;
  let fixture: ComponentFixture<ContratorsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratorsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratorsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
