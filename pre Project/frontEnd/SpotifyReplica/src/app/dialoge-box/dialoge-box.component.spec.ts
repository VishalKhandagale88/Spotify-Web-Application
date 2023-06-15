import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogeBoxComponent } from './dialoge-box.component';

describe('DialogeBoxComponent', () => {
  let component: DialogeBoxComponent;
  let fixture: ComponentFixture<DialogeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogeBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
