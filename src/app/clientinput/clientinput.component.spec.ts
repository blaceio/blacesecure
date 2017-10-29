import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientinputComponent } from './clientinput.component';

describe('ClientinputComponent', () => {
  let component: ClientinputComponent;
  let fixture: ComponentFixture<ClientinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
