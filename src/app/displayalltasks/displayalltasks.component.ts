import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { StudentService } from '../student.service';

declare var jQuery: any;

@Component({
  selector: 'app-displayalltasks',
  templateUrl: './displayalltasks.component.html',
  styleUrls: ['./displayalltasks.component.css']
})
export class DisplayalltasksComponent implements OnInit {

  public tasks: any;
  task : any;
  student: any;
  status: any;
  str1: any;
  str: any;
  review : any;
  constructor(private service: FacultyService, private service1: StudentService) {
    this.task = {description: '', subject: '', submitDate: '', uploadDate: '', facultyId: '', review: 'Good'};
  }

  ngOnInit(): void {
    this.service.getAllTask().subscribe((result: any) => {console.log(result); this.tasks = result;})
  }
  check(taskId: any) {
  }
  showEditPopup(taskId: any) {
    //this.editObject = user;
    this.str = null;
    this.service1.getDetails().subscribe((result: any) => {console.log(result); this.student = result;
      this.service.check(taskId,this.student.studentId).subscribe((result: any) => {console.log(result); this.status = result;
        if(this.status) {
          this.str = "Submitted";
        } else {
          this.str = "Not Submitted";
        }
      console.log(status);
        //this.showEditPopup(status);
      })
      })
    jQuery('#empEditPopup').modal('show');
  }

  showEditPopup1(taskId: any) {
    //this.editObject = user;
    this.str1 = null;
    this.service1.getDetails().subscribe((result: any) => {console.log(result); this.student = result;
      this.service.check1(taskId,this.student.studentId).subscribe((result: any) => {console.log(result); this.review = result;
        if(this.review) {
          this.str1 = this.review.review;
        } else {
          this.str1 = "Not Reviewed";
        }
      console.log(this.review);
        //this.showEditPopup(status);
      })
      })
    jQuery('#empEditPopup1').modal('show');
  }
}
