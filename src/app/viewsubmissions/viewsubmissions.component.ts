import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-viewsubmissions',
  templateUrl: './viewsubmissions.component.html',
  styleUrls: ['./viewsubmissions.component.css']
})
export class ViewsubmissionsComponent implements OnInit {
  user: any;
  submits: any;
  constructor(private service: FacultyService) { }

  ngOnInit(): void {
    this.myFunction();
  }
  
  myFunction() {
    this.service.getDetails().subscribe((result: any) => {console.log(result); this.user = result;
    // this.name = this.user.facultyName;
    console.log(this.user.subject);
    this.service.getAllSubmissions(this.user.subject).subscribe((result: any) => {console.log(result); this.submits = result;})
    });
  }

}
