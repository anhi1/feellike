import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaFormImagesComponent } from './casa-form-images.component';

describe('CasaFormImagesComponent', () => {
  let component: CasaFormImagesComponent;
  let fixture: ComponentFixture<CasaFormImagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasaFormImagesComponent]
    });
    fixture = TestBed.createComponent(CasaFormImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
