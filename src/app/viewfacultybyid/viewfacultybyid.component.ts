import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-viewfacultybyid',
  templateUrl: './viewfacultybyid.component.html',
  styleUrls: ['./viewfacultybyid.component.css']
})
export class ViewfacultybyidComponent implements OnInit {

  public faculty: any;
  public facultyId: any;
  users: any;
  profile: any;

  constructor(private service: FacultyService) { }

  ngOnInit(): void {
    this.service.getAllFaculty().subscribe((result: any) => {console.log(result); this.users = result;})
  }

  getFacultyById() {
    this.service.getFacultyById(this.facultyId).subscribe((result: any) => {console.log(result); this.faculty = result;
      this.service.getProfile(this.faculty.facultyId).subscribe((result: any) => {console.log(result); 
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
