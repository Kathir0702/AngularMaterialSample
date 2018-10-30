import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusformComponent } from './statusform.component';

describe('StatusformComponent', () => {
  let component: StatusformComponent;
  let fixture: ComponentFixture<StatusformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
