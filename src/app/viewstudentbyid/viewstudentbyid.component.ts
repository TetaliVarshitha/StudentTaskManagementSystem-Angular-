import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-viewstudentbyid',
  templateUrl: './viewstudentbyid.component.html',
  styleUrls: ['./viewstudentbyid.component.css']
})
export class ViewstudentbyidComponent implements OnInit {

  public student: any;
  public studentId: any;
  users: any;
  profile: any;

  constructor(private service: StudentService, private service1: FacultyService) { }

  ngOnInit(): void {
    this.service.getAllStudents().subscribe((result: any) => {console.log(result); this.users = result;})
  }

  getStudentById() {
    this.service.getStudentById(this.studentId).subscribe((result: any) => {console.log(result); this.student = result;
      this.service1.getStudentProfile(this.student.studentId).subscribe((result: any) => {console.log(result); 
        if(result != null) {
          console.log("Hii");
          this.profile = result;
      } else {
        this.profile.profileId = 3;
        this.profile.facultyId = 0;
        this.profile.imageUrl = 'avatar.png';
      }
    })
    })
  }

}
