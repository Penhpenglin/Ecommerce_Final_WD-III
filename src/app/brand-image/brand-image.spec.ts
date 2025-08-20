import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandImage } from './brand-image';

describe('BrandImage', () => {
  let component: BrandImage;
  let fixture: ComponentFixture<BrandImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
