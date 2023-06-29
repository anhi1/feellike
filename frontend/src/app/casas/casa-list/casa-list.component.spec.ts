import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasaListComponent } from './casa-list.component';

describe('CasaListComponent', () => {
  let component: CasaListComponent;
  let fixture: ComponentFixture<CasaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CasaListComponent]
    });
    fixture = TestBed.createComponent(CasaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
