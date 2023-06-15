import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewsingleplaylistComponent } from './viewsingleplaylist.component';

describe('ViewsingleplaylistComponent', () => {
  let component: ViewsingleplaylistComponent;
  let fixture: ComponentFixture<ViewsingleplaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewsingleplaylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewsingleplaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
