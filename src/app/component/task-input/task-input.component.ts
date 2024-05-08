import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { TaskService } from '../../task.service';
import { nanoid } from 'nanoid';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {
  // task: string = ''
  addTaskForm: FormGroup;

  constructor(private taskService: TaskService, private fb: FormBuilder) {
    this.addTaskForm = this.fb.group({
      addTask: ['', Validators.required],
      
    });
    
  }
  
  addTask(){
    const task = this.addTaskForm.get('addTask')!.value
    if(task?.trim()?.length > 0) {
      this.taskService.addTask({id:nanoid(),task:task, completed: false})
      this.addTaskForm.get('addTask')?.reset();
      
    }
    
  }
  
}
