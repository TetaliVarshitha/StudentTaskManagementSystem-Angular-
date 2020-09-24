import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent implements OnInit {
  student: any;
  
  constructor(private router: Router, private service: StudentService,private toastr: ToastrService) { 
    this.student = {studentName: '', emailId: '', branch: '', dateOfBirth: '', gender: '', mobileNumber: '',address:'', password: ''}; 
  }

  ngOnInit(): void {
  }
  
  register(registerForm: any): void {
        var pattern = /^[^ ]+@bvrithyderabad.edu.in$/;
        var mob = /^[1-9]{1}[0-9]{9}$/;
        var pattern1 = /^([1-9][0,9][0,9][0-9])\-([0-9]{2})\-([0-9]{2})$/;

        if (this.student.emailId.match(pattern)) {
            //text.innerHTML = "Your Email Address is Valid.";
            if(this.student.mobileNumber.match(mob)) {
              if(this.student.dateOfBirth.match(pattern1)) {

            this.service.registerStudent(this.student).subscribe((result: any) => {console.log(result); });
    console.log(registerForm);
    this.toastr.success('','Successfully Registered');
    this.router.navigate(['studentlogin']);
              } else {
                this.toastr.error('','Enter Valid Date Of Birth');
              }
            } else {
              this.toastr.error('','Enter Valid Mobile Number');
            }
        } else {
          this.toastr.error('','Enter Valid Email Address');
           // text.innerHTML = "Please Enter Valid Email Address.";
          
        }
  }
}
