import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaFormComponent } from './casa-form.component';

describe('CasaFormComponent', () => {
  let component: CasaFormComponent;
  let fixture: ComponentFixture<CasaFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasaFormComponent]
    });
    fixture = TestBed.createComponent(CasaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
