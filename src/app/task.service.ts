import { Injectable} from '@angular/core';
import { taskInterface } from '../utils';
import { Observable,of, BehaviorSubject } from 'rxjs';

// import { trigger } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // tasks:taskInterface[] = [];
  tasksSubject = new BehaviorSubject<taskInterface[]>([]);

  // addTask(task:taskInterface):void {
  //   this.tasks.push(task)
  //   console.log('done')
  // }

  addTask(task:taskInterface){
    const updatedTasks = [...this.tasksSubject.value, task]
    // console.log(updatedTasks)
    this.tasksSubject.next(updatedTasks)
  }

  // getTasks():Observable<taskInterface[]> {
  //   return of(this.tasks)
  // }

  deleteTask(id:string):void {
    const updatedTasks = this.tasksSubject.value.filter(task => task.id !== id)
    this.tasksSubject.next(updatedTasks)
    // return of(this.tasks)

    

  }

    editTask(id:string,taskContent:string):void {
      const index = this.tasksSubject.value.findIndex(task => task.id === id);
      this.tasksSubject.value[index].task = taskContent;
    }
  setCompleted(id:string):void {
    const index = this.tasksSubject.value.findIndex(task => task.id === id);
    
    this.tasksSubject.value[index].completed = !this.tasksSubject.value[index].completed
    }
  
  constructor() { }
}
