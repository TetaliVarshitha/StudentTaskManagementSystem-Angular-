import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { ToastrService } from 'ngx-toastr';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  user: any;
  imageUrl : string;
  fileToUpload: File = null;
  reader: FileReader;
  tasks: any;
  students: any;
  faculty: any;
  
  constructor(private service: FacultyService,private service1: StudentService, private toastr: ToastrService){
  this.imageUrl = '/assets/images/default.png';
  //this.student = {studentName: '', emailId: '', branch: '', dateOfBirth: '', gender: '', mobileNumber: '',address:'', password: ''}; 
  } 
  
  ngOnInit(): void {
    this.service1.getDetails().subscribe((result: any) => {console.log(result); this.user = result;})
    this.service.getTasks().subscribe((result: any) => {console.log(result); this.tasks = result;})
    this.service1.getAllStudents().subscribe((result: any) => {console.log(result); this.students = result;})
    this.service.getAllFaculty().subscribe((result: any) => {console.log(result); this.faculty = result;})
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
  this.service.postFile(imageForm, this.fileToUpload).subscribe(
  data => {
  console.log('done');
  this.imageUrl = '/assets/images/default.png'; 
  this.toastr.success('','Submitted Successfully');
  }
  );
  }
}