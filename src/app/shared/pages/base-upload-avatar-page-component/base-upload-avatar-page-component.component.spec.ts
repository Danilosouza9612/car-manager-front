import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseUploadAvatarPageComponentComponent } from './base-upload-avatar-page-component.component';

describe('BaseUploadAvatarPageComponentComponent', () => {
  let component: BaseUploadAvatarPageComponentComponent;
  let fixture: ComponentFixture<BaseUploadAvatarPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseUploadAvatarPageComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseUploadAvatarPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
