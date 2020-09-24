import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-displayalltasks',
  templateUrl: './displayalltasks.component.html',
  styleUrls: ['./displayalltasks.component.css']
})
export class DisplayalltasksComponent implements OnInit {

  public tasks: any;
  task : any;
  constructor(private service: FacultyService) {
    this.task = {description: '', subject: '', submitDate: '', uploadDate: '', facultyId: '', review: 'Good'};
  }

  ngOnInit(): void {
    this.service.getAllTask().subscribe((result: any) => {console.log(result); this.tasks = result;})
  }
}
