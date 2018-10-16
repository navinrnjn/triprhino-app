import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServicecomponentComponent } from './add-servicecomponent.component';

describe('AddServicecomponentComponent', () => {
  let component: AddServicecomponentComponent;
  let fixture: ComponentFixture<AddServicecomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicecomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
