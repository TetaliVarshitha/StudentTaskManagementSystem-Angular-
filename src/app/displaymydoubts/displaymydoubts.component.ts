import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-displaymydoubts',
  templateUrl: './displaymydoubts.component.html',
  styleUrls: ['./displaymydoubts.component.css']
})
export class DisplaymydoubtsComponent implements OnInit {

  public user : any;
  public doubts: any;
  public studentId : any;
  constructor(private service: StudentService) {
  //  this.user = {facultyId: '',facultyName: '', emailId: '', subject: '', gender: '', mobileNumber: '',address:'', password: ''}; 
   
  }

  ngOnInit(): void {
    this.myFunction();

   //this.service.getDetails().subscribe((result: any) => {console.log(result); this.user = result;
     // console.log("vyshali " + this.user);
    //this.facultyId = this.user.facultyId;
    //console.log(this.facultyId);
    //});

    //console.log("ngonit "+ this.facultyId);
   // this.service.getAllTasks().subscribe((result: any) => {console.log(result); this.tasks = result;})
  }

  myFunction() {
    this.service.getDetails().subscribe((result: any) => {console.log(result); this.user = result;
    this.studentId = this.user.studentId;
    console.log(this.user);
    console.log(this.studentId);
    this.service.getMyDoubts(this.studentId).subscribe((result: any) => {console.log(result); this.doubts = result;})
    });
    // console.log(this.facultyId);
    // this.service.getAllTasks(this.facultyId).subscribe((result: any) => {console.log(result); this.tasks = result;})
  }
}
