import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAboutUsBannerComponent } from './home-about-us-banner.component';

describe('HomeAboutUsBannerComponent', () => {
  let component: HomeAboutUsBannerComponent;
  let fixture: ComponentFixture<HomeAboutUsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAboutUsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAboutUsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
