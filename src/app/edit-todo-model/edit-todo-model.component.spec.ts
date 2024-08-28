import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTodoModelComponent } from './edit-todo-model.component';

describe('EditTodoModelComponent', () => {
  let component: EditTodoModelComponent;
  let fixture: ComponentFixture<EditTodoModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTodoModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditTodoModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
