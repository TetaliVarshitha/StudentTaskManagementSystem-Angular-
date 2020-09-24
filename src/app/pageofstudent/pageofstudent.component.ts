import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-pageofstudent',
  templateUrl: './pageofstudent.component.html',
  styleUrls: ['./pageofstudent.component.css']
})
export class PageofstudentComponent implements OnInit {

  public user: any;
  public name: any;

  constructor(private service: StudentService) { 
    // this.user = service.object;
    // console.log("Hello " + this.user);
  }

  ngOnInit(): void {
   // this.user = this.service.object;
   // console.log("Hello " + this.user);
   // this.name = this.user.facultyName;
   this.myFunction();
  }

  myFunction() {
    this.service.getDetails().subscribe((result: any) => {console.log(result); this.user = result;
    this.name = this.user.studentName;
    console.log(name);
    });
  }
}
