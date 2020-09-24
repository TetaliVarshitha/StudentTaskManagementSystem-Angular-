import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.css']
})
export class StudentloginComponent implements OnInit {

  user: any;
  emailId : any;
  password : any;

  constructor(private router: Router, private studentService: StudentService,private toastr: ToastrService) { 
    //this.user = {facultyName: '', emailId: '', subject: '', gender: '', mobileNumber: '',address:'', password: ''}; 
  }

  ngOnInit(): void {
  }

  loginUser(): void {
   // console.log('loginUser method is called...');
    //console.log(this.user);
  }

  validateUser(loginForm: any): void {

    this.emailId = loginForm.loginId;
    this.password = loginForm.password;
    console.log(this.emailId);
    console.log(this.password);
    this.studentService.getUser(this.emailId, this.password).subscribe((result:any) => {this.user = result;
    console.log(loginForm);
    console.log("varshitha " + this.user);

   if(this.user){
    this.studentService.setUserLoggedIn();
   // this.toastr.success('','Login Success');
    console.log(this.user);
    this.router.navigate(['pageofstudent']);
  
   } else {
    //console.log(result);
    this.toastr.error('Invalid Credentials','Login Failed');
   }
   console.log("varshitha " + this.user);

  }
    )};
  }
