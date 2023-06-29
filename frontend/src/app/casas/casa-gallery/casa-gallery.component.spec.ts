import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaGalleryComponent } from './casa-gallery.component';

describe('CasaGalleryComponent', () => {
  let component: CasaGalleryComponent;
  let fixture: ComponentFixture<CasaGalleryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasaGalleryComponent]
    });
    fixture = TestBed.createComponent(CasaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
