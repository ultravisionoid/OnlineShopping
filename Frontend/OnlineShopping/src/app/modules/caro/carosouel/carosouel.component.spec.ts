import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosouelComponent } from './carosouel.component';

describe('CarosouelComponent', () => {
  let component: CarosouelComponent;
  let fixture: ComponentFixture<CarosouelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarosouelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarosouelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
