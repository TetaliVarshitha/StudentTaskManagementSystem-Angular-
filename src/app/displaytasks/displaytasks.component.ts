import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-displaytasks',
  templateUrl: './displaytasks.component.html',
  styleUrls: ['./displaytasks.component.css']
})
export class DisplaytasksComponent implements OnInit {

  public user : any;
  public tasks: any;
  public facultyId : any;
  constructor(private service: FacultyService, private service1: TaskService) {
    this.user = {facultyId: '',facultyName: '', emailId: '', subject: '', gender: '', mobileNumber: '',address:'', password: ''}; 
   
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
    this.facultyId = this.user.facultyId;
    console.log(this.user);
    console.log(this.facultyId);
    this.service.getAllTasks(this.facultyId).subscribe((result: any) => {console.log(result); this.tasks = result;})
    });
    // console.log(this.facultyId);
    // this.service.getAllTasks(this.facultyId).subscribe((result: any) => {console.log(result); this.tasks = result;})
  }

  deleteTask(task: any) {
    //alert("hi");
    this.service1.deleteTask(task).subscribe((result: any) => {
      const i = this.tasks.findIndex((element) => {return element.taskId === task.taskId;});
      this.tasks.splice(i, 1);
    });
  }
}
