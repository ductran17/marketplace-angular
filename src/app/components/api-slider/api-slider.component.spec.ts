import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiSliderComponent } from './api-slider.component';

describe('ApiSliderComponent', () => {
  let component: ApiSliderComponent;
  let fixture: ComponentFixture<ApiSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
