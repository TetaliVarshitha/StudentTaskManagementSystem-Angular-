import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-deletefaculty',
  templateUrl: './deletefaculty.component.html',
  styleUrls: ['./deletefaculty.component.css']
})
export class DeletefacultyComponent implements OnInit {

  public faculty: any;
  constructor(private service: FacultyService) {
  }

  ngOnInit(): void {
    this.service.getAllFaculty().subscribe((result: any) => {console.log(result); this.faculty = result;})
  }

  deleteFaculty(fac: any) {
    //alert("hi");
    this.service.deleteFaculty(fac).subscribe((result: any) => {
      const i = this.faculty.findIndex((element) => {return element.facultyId === fac.facultyId;});
      this.faculty.splice(i, 1);
    });
  }
}
