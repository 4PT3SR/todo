import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header.component';
import { TaskInputComponent } from './component/task-input/task-input.component';
import { TaskComponent } from './component/task/task.component';
import { TaskService } from './task.service';
import { taskInterface } from '../utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,TaskInputComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo-app';
  tasks:taskInterface[] = []

  constructor(private taskService:TaskService) {
  }
  
  ngOnInit() {
    // this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
    this.taskService.tasksSubject.subscribe(tasks => this.tasks = tasks)
  }
  
}
