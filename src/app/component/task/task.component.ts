import { Component, Input,ElementRef, ViewChild } from '@angular/core';
import { NgStyle } from '@angular/common';

// import {MatIconModule} from '@angular/material/icon';
import { taskInterface } from '../../../utils';
import { TaskService } from '../../task.service';
import { ButtonComponent } from '../button/button.component';
@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgStyle, ButtonComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @ViewChild('inputField') inputField!: ElementRef<HTMLBodyElement>;
  @Input() task:taskInterface  = {id:'',task:'',completed:false};
  isEditable = false;
  decoration:string = !this.task.completed? 'line-through': 'none';
  edittedTaskContent = ''
  toggleCompleted() {
    this.taskService.setCompleted(this.task.id)
  }

  toggleEditable() {
    this.isEditable = !this.isEditable;

  
  }
 
  // onToggleEdit() {
  //   this.toggleEditable()
  //   this.isEditable = !this.isEditable;
  // }
  
  onEditComplete() {
    if(this.edittedTaskContent.trim().length > 0) {
      this.toggleEditable()
      this.taskService.editTask(this.task.id, this.edittedTaskContent)
    }
  }
  
  onEdit(event:any) {
     this.edittedTaskContent = event.target.innerText;
    // this.taskService.editTask(this.task.id, taskContent)
    
    // this.toggleEditable()

    // this.isEditable = !this.isEditable;
    // console.log(this.isEditable)
    // this.inputField.nativeElement.focus()
  }
   deleteTask() {
     console.log('deleted')
    // this.taskService.deleteTask(this.task.id).subscribe(task => this.task = {id:'',task:'',completed:false})
    this.taskService.deleteTask(this.task.id)
  }
  handleClick() {
    if(this.isEditable) {
        this.inputField.nativeElement.focus()

      } else {
        this.toggleCompleted()
      }
    }
   
  //  focusInput() {
  //   this.inputField.nativeElement.focus();
  // }
  constructor(private taskService: TaskService) {
    
  }




}
