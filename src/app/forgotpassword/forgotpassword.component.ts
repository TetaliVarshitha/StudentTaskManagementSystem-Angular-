import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { ToastrService } from 'ngx-toastr';

declare var jQuery: any;
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  user: any;
  emailId : any;
  editObject : any;
  constructor(private service: FacultyService, private toastr: ToastrService) { 
    this.editObject = {facultyId: '', facultyName: '', subject: '', gender: '', emailId:'', mobileNumber:'', password: ''};
  }

  ngOnInit(): void {
    
  }
  ChangePassword(): any {

    this.service.getFaculty(this.emailId).subscribe((result: any) => {console.log(result); this.user = result;
    console.log("hello" + this.user);
    this.editObject = this.user;
    jQuery('#empEditPopup').modal('show');
    //this.showEditPopup(this.user);
    console.log("Hi");
    });
  }
  showEditPopup() {
    this.service.getFaculty(this.emailId).subscribe((result: any) => {console.log(result); this.user = result;
      console.log("hello" + this.user);
      this.editObject = this.user;
      jQuery('#empEditPopup').modal('show');
      //this.showEditPopup(this.user);
      console.log("Hi");
      });
  }
  
  verify() {
    this.service.getStudent(this.emailId).subscribe((result: any) => {console.log(result); this.user = result;
    if(this.user==null) {
     this.toastr.error('','Not Registered EmailId');
    } else {
     this.toastr.success('','Credentials sent to mail');
    }
    });
  }
  updateFaculty() {
    this.service.updateFaculty(this.editObject).subscribe();
    console.log(this.editObject);
  }

}
