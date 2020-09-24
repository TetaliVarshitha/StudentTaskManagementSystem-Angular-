import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';

declare var jQuery: any;

@Component({
  selector: 'app-displaydoubts',
  templateUrl: './displaydoubts.component.html',
  styleUrls: ['./displaydoubts.component.css']
})

export class DisplaydoubtsComponent implements OnInit {

  public doubts: any;
  public taskId : any;
  editObject : any;
  public user: any;
  public date: any;

  constructor(private service: FacultyService) {
    this.editObject = {doubtId: '', question: '', answer: ''};
   }

  ngOnInit(): void {
    
  }

  getReviewedDoubts() {
    this.service.getReviewedDoubts(this.date).subscribe((result: any) => {console.log(result); this.doubts = result;})
  }

  getPendingDoubts() {
    this.service.getPendingDoubts().subscribe((result: any) => {console.log(result); this.doubts = result;})
  }
  
  showEditPopup(doubt: any) {
    this.editObject = doubt;
    jQuery('#empEditPopup').modal('show');
  }

  updateDoubt() {
    //this.service.getDetails().subscribe((result: any) => {console.log(result); this.user = result;
    this.service.updateDoubt(this.editObject).subscribe();
    console.log(this.editObject);
  }

}

