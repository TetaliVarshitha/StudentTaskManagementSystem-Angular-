import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { ToastrService } from 'ngx-toastr';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-postdoubt',
  templateUrl: './postdoubt.component.html',
  styleUrls: ['./postdoubt.component.css']
})
export class PostdoubtComponent implements OnInit {

  public user: any;
  public id: any;
  public doubt: any;
  tasks: any;

  constructor(private router: Router, private service1: FacultyService, private service: StudentService, private toastr: ToastrService) { 
    this.doubt = {taskId: '', question: '', studentId: ''}; 
  }

  ngOnInit(): void {
    this.service1.getAllTask().subscribe((result: any) => {console.log(result); this.tasks = result;})
    this.myFunction();
  }

  myFunction() {
    this.service.getDetails().subscribe((result: any) => {console.log(result); this.user = result;
    this.id = this.user.facultyName;
    console.log(name);
    });
  }

  myFunction1(taskId: any) {
    this.doubt.taskId = taskId;
    console.log("Executed!");
  }

  register(registerForm: any): void {
    this.doubt.studentId = this.user.studentId;
    this.service.registerDoubt(this.doubt).subscribe((result: any) => {console.log(result);
    console.log(registerForm);
    this.toastr.success('','Successfully posted doubt');
    this.router.navigate(['pageofstudent']);
  });
  }
}