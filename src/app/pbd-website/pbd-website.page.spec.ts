import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbdWebsitePage } from './pbd-website.page';

describe('PbdWebsitePage', () => {
  let component: PbdWebsitePage;
  let fixture: ComponentFixture<PbdWebsitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbdWebsitePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbdWebsitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
