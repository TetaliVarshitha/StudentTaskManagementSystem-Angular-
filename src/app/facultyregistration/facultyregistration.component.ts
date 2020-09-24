import { Component, OnInit } from '@angular/core';
import { FacultyService } from './../faculty.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-facultyregistration',
  templateUrl: './facultyregistration.component.html',
  styleUrls: ['./facultyregistration.component.css']
})
export class FacultyregistrationComponent implements OnInit {

    faculty: any;
  
    constructor(private router: Router, private service: FacultyService,private toastr: ToastrService) { 
      this.faculty = {facultyName: '', emailId: '', subject: '', gender: '', mobileNumber: '',address:'', password: ''}; 
    }
  
    ngOnInit(): void {
    }

    register(registerForm: any): void {
      var pattern = /^[^ ]+@bvrithyderabad.edu.in$/;
      var mob = /^[1-9]{1}[0-9]{9}$/;
      var pattern1 = /^([1-9][0,9][0,9][0-9])\-([0-9]{2})\-([0-9]{2})$/;

      if (this.faculty.emailId.match(pattern)) {
          //text.innerHTML = "Your Email Address is Valid.";
          if(this.faculty.mobileNumber.match(mob)) {
            this.service.registerFaculty(this.faculty).subscribe((result: any) => {console.log(result); });
            console.log(registerForm);
            this.toastr.success('','Successfully Registered');
            this.router.navigate(['facultylogin']);
          } else {
            this.toastr.error('','Enter Valid Mobile Number');
          }
      } else {
        this.toastr.error('','Enter Valid Email Address');
         // text.innerHTML = "Please Enter Valid Email Address.";
        
      }
}
}