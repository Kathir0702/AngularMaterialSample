import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttaskComponent } from './parenttask.component';

describe('ParenttaskComponent', () => {
  let component: ParenttaskComponent;
  let fixture: ComponentFixture<ParenttaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenttaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
