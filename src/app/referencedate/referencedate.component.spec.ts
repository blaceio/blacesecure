import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferencedateComponent } from './referencedate.component';

describe('ReferencedateComponent', () => {
  let component: ReferencedateComponent;
  let fixture: ComponentFixture<ReferencedateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferencedateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferencedateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
