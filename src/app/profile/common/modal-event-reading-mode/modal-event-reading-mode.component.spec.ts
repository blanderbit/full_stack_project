import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEventReadingModeComponent } from './modal-event-reading-mode.component';

describe('ModalEventReadingModeComponent', () => {
  let component: ModalEventReadingModeComponent;
  let fixture: ComponentFixture<ModalEventReadingModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEventReadingModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEventReadingModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
