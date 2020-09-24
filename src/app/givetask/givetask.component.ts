import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';

@Component({
  selector: 'app-givetask',
  templateUrl: './givetask.component.html',
  styleUrls: ['./givetask.component.css']
})
export class GivetaskComponent implements OnInit {

  public user: any;
  public id: any;
  public task: any;
  public minDate = moment(new Date()).format('YYYY-MM-DD');


  constructor(private router: Router, private service1: TaskService, private service: FacultyService, private toastr: ToastrService) { 
    this.task = {description: '', subject: '', submitDate: '', uploadDate: '', facultyId: ''}; 
  }

  ngOnInit(): void {
    this.myFunction();
  }

  myFunction() {
    this.service.getDetails().subscribe((result: any) => {console.log(result); this.user = result;
    this.id = this.user.facultyName;
    console.log(name);
    });
  }

  register(registerForm: any): void {
    this.task.facultyId = this.user.facultyId;
    this.task.subject = this.user.subject;
    this.service1.registerTask(this.task).subscribe((result: any) => {console.log(result);
    console.log(registerForm);
    //this.service1.sendEmail(this.user).subscribe((result: any) => {console.log(result);});
   this.toastr.success('','Successfully given task');
    this.router.navigate(['pageoffaculty']);
  });
  }
}
