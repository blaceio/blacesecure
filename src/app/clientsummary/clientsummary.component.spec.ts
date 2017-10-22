import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsummaryComponent } from './clientsummary.component';

describe('ClientsummaryComponent', () => {
  let component: ClientsummaryComponent;
  let fixture: ComponentFixture<ClientsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
