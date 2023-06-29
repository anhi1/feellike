import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaDetailComponent } from './casa-detail.component';

describe('CasaDetailComponent', () => {
  let component: CasaDetailComponent;
  let fixture: ComponentFixture<CasaDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasaDetailComponent]
    });
    fixture = TestBed.createComponent(CasaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
