import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParenttaskformComponent } from './parenttaskform.component';

describe('ParenttaskformComponent', () => {
  let component: ParenttaskformComponent;
  let fixture: ComponentFixture<ParenttaskformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParenttaskformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParenttaskformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
