import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByStatus'
})
export class FilterByStatusPipe implements PipeTransform {
  transform(todos: any[], status: string): any[] {
    if (!todos || !status) {
      return todos;
    }
    return todos.filter(todo => todo.status === status);
  }
}
