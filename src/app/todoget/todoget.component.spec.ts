import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodogetComponent } from './todoget.component';

describe('TodogetComponent', () => {
  let component: TodogetComponent;
  let fixture: ComponentFixture<TodogetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodogetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodogetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
