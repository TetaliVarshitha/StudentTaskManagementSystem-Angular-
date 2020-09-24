import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

@Component({
  selector: 'app-displayalldoubts',
  templateUrl: './displayalldoubts.component.html',
  styleUrls: ['./displayalldoubts.component.css']
})
export class DisplayalldoubtsComponent implements OnInit {

  public doubts: any;
 

  constructor(private service: FacultyService) {
   // this.editObject = {doubtId: '', question: '', answer: ''};
   }

  ngOnInit(): void {
    this.service.getAllDoubts().subscribe((result: any) => {console.log(result); this.doubts = result;})
  }

}
