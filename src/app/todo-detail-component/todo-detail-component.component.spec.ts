import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDetailComponentComponent } from './todo-detail-component.component';

describe('TodoDetailComponentComponent', () => {
  let component: TodoDetailComponentComponent;
  let fixture: ComponentFixture<TodoDetailComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoDetailComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
