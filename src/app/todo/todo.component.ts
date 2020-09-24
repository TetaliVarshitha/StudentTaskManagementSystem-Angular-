import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo: any;
  user : any;
  todos: any;

  constructor(private service : FacultyService,private service1 : StudentService,private toastr: ToastrService) { 
    this.todo = {studentId: '', description: ''};
  }

  ngOnInit(): void {
    
    this.service1.getDetails().subscribe((result: any) => {console.log(result); this.user = result; 
    this.service.getAllTodos(this.user.studentId).subscribe((result: any) => {console.log(result); this.todos = result;})
  });
  }

  register(registerForm: any): void {
    this.todo.studentId = this.user.studentId;
    this.service.registertodo(this.todo).subscribe((result: any) => {console.log(result); 
      this.service.getAllTodos(this.user.studentId).subscribe((result: any) => {console.log(result); this.todos = result;})
    });
    console.log(registerForm);
    this.toastr.success('','Successfully Added');
  }
  deleteTodo(t: any) {
    //alert("hi");
    this.service.deleteTodo(t).subscribe((result: any) => {
      const i = this.todos.findIndex((element) => {return element.todoId === t.todoId;});
      this.todos.splice(i, 1);
    });
  }

}
