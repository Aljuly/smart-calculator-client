import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionComponentComponent } from './addition-component.component';

describe('AdditionComponentComponent', () => {
  let component: AdditionComponentComponent;
  let fixture: ComponentFixture<AdditionComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdditionComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
