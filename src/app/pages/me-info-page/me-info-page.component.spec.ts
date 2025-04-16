import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeInfoPageComponent } from './me-info-page.component';

describe('MeInfoPageComponent', () => {
  let component: MeInfoPageComponent;
  let fixture: ComponentFixture<MeInfoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeInfoPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
