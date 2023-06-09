import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaReserveComponent } from './casa-reserve.component';

describe('CasaReserveComponent', () => {
  let component: CasaReserveComponent;
  let fixture: ComponentFixture<CasaReserveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasaReserveComponent]
    });
    fixture = TestBed.createComponent(CasaReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
