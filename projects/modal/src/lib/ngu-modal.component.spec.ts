import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguModal } from './ngu-modal.component';

describe('NguModalComponent', () => {
  let component: NguModal;
  let fixture: ComponentFixture<NguModal>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NguModal]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
