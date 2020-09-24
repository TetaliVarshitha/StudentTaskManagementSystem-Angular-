import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-checkreview',
  templateUrl: './checkreview.component.html',
  styleUrls: ['./checkreview.component.css']
})
export class CheckreviewComponent implements OnInit {

 
  public studentId : any;

  user : any;
  reviews : any;

  constructor(private service: StudentService) {
   
   }

  ngOnInit(): void {
    this.myFunction();
  }
  myFunction() {
    this.service.getDetails().subscribe((result: any) => {console.log(result); this.user = result;
    this.studentId = this.user.studentId;
    console.log(this.user);
    console.log(this.studentId);
    this.service.getReviews(this.studentId).subscribe((result: any) => {console.log(result); this.reviews = result;})
    });
    // console.log(this.facultyId);
    // this.service.getAllTasks(this.facultyId).subscribe((result: any) => {console.log(result); this.tasks = result;})
  }

}

