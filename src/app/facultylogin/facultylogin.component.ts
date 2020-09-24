import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from './../faculty.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-facultylogin',
  templateUrl: './facultylogin.component.html',
  styleUrls: ['./facultylogin.component.css']
})
export class FacultyloginComponent implements OnInit {
  user: any;
  emailId : any;
  password : any;

  constructor(private router: Router, private facultyService: FacultyService,private toastr: ToastrService) { 
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
    this.facultyService.getUser(this.emailId, this.password).subscribe((result:any) => {this.user = result;
    console.log(loginForm);
    console.log("varshitha " + this.user);

   if(this.user){
    this.facultyService.setUserLoggedIn();
    //this.toastr.success('','Login Success');
    console.log(this.user);
    this.router.navigate(['pageoffaculty']);
  
   } else {
    //console.log(result);
    this.toastr.error('Invalid Credentials','Login Failed');
   }
   console.log("varshitha " + this.user);

  }
    )};
  }
