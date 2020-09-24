import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-givereview',
  templateUrl: './givereview.component.html',
  styleUrls: ['./givereview.component.css']
})
export class GivereviewComponent implements OnInit {
  task : any;
  students: any;
  users: any;
  faculty: any;
  facultyId: any;
  taskId: any;
  studentId: any;


  constructor(private router: Router,private service: FacultyService, private service1: StudentService, private toastr: ToastrService) {
    this.task = {review: '', studentId: '', taskId: ''}; 
   }

  ngOnInit(): void {
    this.service.getDetails().subscribe((result: any) => {console.log(result); this.faculty = result;
      this.facultyId = this.faculty.facultyId;
      //console.log(this.user);
      //console.log(this.facultyId);
      this.service.getAllTasks(this.facultyId).subscribe((result: any) => {console.log(result); this.users = result;})
      });
    this.service.getAllTask().subscribe((result: any) => {console.log(result); this.users = result;})
    this.service1.getAllStudents().subscribe((result: any) => {console.log(result); this.students = result;})
  }
  register(registerForm: any): void {
    this.task.taskId = this.taskId;
    this.task.studentId = this.studentId;
    console.log(this.task);
    this.service.registerReview(this.task).subscribe((result: any) => {console.log(result);
    console.log(registerForm);
    this.toastr.success('','Successfully given review');
    this.router.navigate(['pageoffaculty']);
  });
  }

}
