import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FacultyService } from '../faculty.service';


declare var jQuery: any;

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {

  user: any;
  editObject: any;
  imageUrl : string;
  fileToUpload: File = null;
  reader: FileReader;
  profile: any;

  constructor(private service: StudentService, private service1: FacultyService) { 
    this.editObject = {studentId: '', studentName: '', dateOfBirth: '', gender: '', emailId:'', mobileNumber:'', password: ''};
    this.profile = {profileId: '', studentId: '', imageUrl:''};
    this.imageUrl = '/assets/images/default.png';
  }
   
  ngOnInit(): void {
    this.myFunction();
    
  }

  myFunction() {
    this.service.getDetails().subscribe((result: any) => {console.log(result); this.user = result;
    // this.name = this.user.facultyName;
    // console.log(name);
    this.service1.getStudentProfile(this.user.studentId).subscribe((result: any) => {console.log(result); 
      if(result != null) {
        console.log("Hii");
        this.profile = result;
    } else {
      this.profile.profileId = 3;
      this.profile.studentId = 0;
      this.profile.imageUrl = 'avatar.png';
    }
  })
  });
  }

    showEditPopup(user: any) {
      this.editObject = user;
      jQuery('#empEditPopup').modal('show');
    }

    showEditPopup1() {
      //this.editObject = user;
      jQuery('#profileEditPopup').modal('show');
    }
  
    updateStudent() {
      this.service.updateStudent(this.editObject).subscribe();
      console.log(this.editObject);
    }

    handleFileInput(file: FileList){
      this.fileToUpload = file.item(0);
      
      //show image preview
      this.reader = new FileReader();
      this.reader.readAsDataURL(this.fileToUpload);
      this.reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      };
      }
      
      OnSubmit(imageForm: any){
        imageForm.studentId = this.user.studentId;
      this.service1.postFile2(imageForm, this.fileToUpload).subscribe(
      data => {
      console.log('done');
      this.imageUrl = '/assets/images/default.png'; 
     // this.toastr.success('','Submitted Successfully');
     this.service1.getStudentProfile(this.user.studentId).subscribe((result: any) => {console.log(result); this.profile = result;
    })
     
    }
      );
      }
}

 /* user: any;
  editObject: any;

  constructor(private service: StudentService) { 
    this.editObject = {studentId: '', studentName: '', dateOfBirth: '', gender: '', emailId:'', mobileNumber:'', password: ''};
  }

  ngOnInit(): void {
    this.myFunction();
  }

  myFunction() {
    this.service.getDetails().subscribe((result: any) => {console.log(result); this.user = result;
    // this.name = this.user.facultyName;
    // console.log(name);
    });
  }

    showEditPopup(user: any) {
      this.editObject = user;
      jQuery('#empEditPopup').modal('show');
    }
  
    updateStudent() {
      this.service.updateStudent(this.editObject).subscribe();
      console.log(this.editObject);
    }
} */
