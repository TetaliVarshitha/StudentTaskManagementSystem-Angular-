import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-pageoffaculty',
  templateUrl: './pageoffaculty.component.html',
  styleUrls: ['./pageoffaculty.component.css']
})
export class PageoffacultyComponent implements OnInit {

  public user: any;
  public name: any;

  constructor(private service: FacultyService) { 
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
    this.name = this.user.facultyName;
    console.log(name);
    });
  }

}
