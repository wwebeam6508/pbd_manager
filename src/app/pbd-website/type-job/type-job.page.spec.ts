import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeJobPage } from './type-job.page';

describe('TypeJobPage', () => {
  let component: TypeJobPage;
  let fixture: ComponentFixture<TypeJobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeJobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeJobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
