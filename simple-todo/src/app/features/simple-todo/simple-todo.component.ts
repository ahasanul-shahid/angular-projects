import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-todo',
  imports: [ReactiveFormsModule],
  templateUrl: './simple-todo.component.html',
  styleUrl: './simple-todo.component.scss'
})
export class SimpleTodoComponent {
  todoForm!: FormGroup;
  taskList: string[] = [];
  constructor(private _fb:FormBuilder){
    this._initTodoForm();
    
  }
  private _initTodoForm(){
    this.todoForm = this._fb.group({
      task: this._fb.control('')
    });
  }
  onNewTask(): void {
    let newTask = this.todoForm.controls['task'].value;
    this.todoForm.reset();
    this.taskList.push(newTask);
  }
  validTask(): boolean {
    return !!this.todoForm.controls['task'].value;
  }
  onDelete(deleteIndex:number): void{
    this.taskList = this.taskList.filter((_, index) => index !== deleteIndex);
  }
}
