import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myaadhar2Component } from './myaadhar2.component';

describe('Myaadhar2Component', () => {
  let component: Myaadhar2Component;
  let fixture: ComponentFixture<Myaadhar2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myaadhar2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myaadhar2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
