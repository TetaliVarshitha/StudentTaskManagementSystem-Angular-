import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyService } from './../faculty.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user: any;

  constructor(private router: Router, private facultyService: FacultyService,private toastr: ToastrService) { 
    this.user = {loginId: '', password: ''};

  }

  ngOnInit(): void {
  }

  loginUser(): void {
    console.log('loginUser method is called...');
    console.log(this.user);
  }

  validateUser(loginForm: any): void {
    if(loginForm.loginId === 'admin' && loginForm.password === 'admin') {
      this.facultyService.setUserLoggedIn();
      //this.toastr.success('','Login Success');
      this.router.navigate(['adminpage']);
    } else {
      this.toastr.error('Invalid Credentials','Login Failed');
    }
    console.log(loginForm);
  }
}
