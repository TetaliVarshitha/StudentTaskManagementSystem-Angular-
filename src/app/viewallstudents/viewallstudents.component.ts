import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-viewallstudents',
  templateUrl: './viewallstudents.component.html',
  styleUrls: ['./viewallstudents.component.css']
})
export class ViewallstudentsComponent implements OnInit {

  public students: any;
  constructor(private service: StudentService) {
  }

  ngOnInit(): void {
    this.service.getAllStudents().subscribe((result: any) => {console.log(result); this.students = result;})
  }
}
