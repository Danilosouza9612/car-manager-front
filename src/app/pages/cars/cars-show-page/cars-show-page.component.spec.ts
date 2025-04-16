import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsShowPageComponent } from './cars-show-page.component';

describe('CarsShowPageComponent', () => {
  let component: CarsShowPageComponent;
  let fixture: ComponentFixture<CarsShowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarsShowPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsShowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
