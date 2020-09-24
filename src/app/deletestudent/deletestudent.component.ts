import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-deletestudent',
  templateUrl: './deletestudent.component.html',
  styleUrls: ['./deletestudent.component.css']
})
export class DeletestudentComponent implements OnInit {

  public students: any;
  constructor(private service: StudentService) {
  }

  ngOnInit(): void {
    this.service.getAllStudents().subscribe((result: any) => {console.log(result); this.students = result;})
  }

  deleteStudent(student: any) {
    //alert("hi");
    this.service.deleteStudent(student).subscribe((result: any) => {
      const i = this.students.findIndex((element) => {return element.studentId === student.studentId;});
      this.students.splice(i, 1);
    });
  }
}

