import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

declare var jQuery: any;

@Component({
  selector: 'app-facultyprofile',
  templateUrl: './facultyprofile.component.html',
  styleUrls: ['./facultyprofile.component.css']
})
export class FacultyprofileComponent implements OnInit {

  user: any;
  editObject: any;
  imageUrl : string;
  fileToUpload: File = null;
  reader: FileReader;
  profile: any;

  constructor(private service: FacultyService) { 
    this.editObject = {facultyId: '', facultyName: '', subject: '', gender: '', emailId:'', mobileNumber:'', password: ''};
    this.profile = {profileId: '', facultyId: '', imageUrl:''};
    this.imageUrl = '/assets/images/default.png';
  }
   
  ngOnInit(): void {
    this.myFunction();
    
  }

  myFunction() {
    this.service.getDetails().subscribe((result: any) => {console.log(result); this.user = result;
    // this.name = this.user.facultyName;
    // console.log(name);
    this.service.getProfile(this.user.facultyId).subscribe((result: any) => {console.log(result); 
      if(result != null) {
        console.log("Hii");
        this.profile = result;
    } else {
      this.profile.profileId = 3;
      this.profile.facultyId = 0;
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
  
    updateFaculty() {
      this.service.updateFaculty(this.editObject).subscribe();
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
        imageForm.facultyId = this.user.facultyId;
      this.service.postFile1(imageForm, this.fileToUpload).subscribe(
      data => {
      console.log('done');
      this.imageUrl = '/assets/images/default.png'; 
     // this.toastr.success('','Submitted Successfully');
     this.service.getProfile(this.user.facultyId).subscribe((result: any) => {console.log(result); this.profile = result;
    })
     
    }
      );
      }
}
