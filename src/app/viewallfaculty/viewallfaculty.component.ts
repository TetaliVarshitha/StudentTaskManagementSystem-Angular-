import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-viewallfaculty',
  templateUrl: './viewallfaculty.component.html',
  styleUrls: ['./viewallfaculty.component.css']
})
export class ViewallfacultyComponent implements OnInit {

  public faculty: any;
  constructor(private service: FacultyService) {
  }

  ngOnInit(): void {
    this.service.getAllFaculty().subscribe((result: any) => {console.log(result); this.faculty = result;})
  }
}
