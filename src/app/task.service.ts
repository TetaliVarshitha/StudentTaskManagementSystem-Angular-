import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FacultyService } from './faculty.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  
  private isUserLogged: any;
  private result : any;
  public object: any;
  public id : any;
  public service : FacultyService;

  constructor(private httpClient: HttpClient) {
    this.isUserLogged = false;
   }

   setUserLoggedIn(): void {
     this.isUserLogged = true;
   }

   setUserLoggedOut(): void {
     this.isUserLogged = false;
   }

   getUserLogged(): any {
     return this.isUserLogged;
   }

   getAllTasks(): any {
     this.id = this.service.object.facultyId;
     return this.httpClient.get('RESTAPI/webapi/myresource/getAllTasks/' + this.id);
   }

   getFacultyById(facultyId: any) {
     return this.httpClient.get('RESTAPI/webapi/myresource/getFacultyById/' + facultyId);
   }
                                                                
   getUser(emailId: any, password : any) {
    this.result = emailId + ' ' + password;
    this.object = this.httpClient.get('RESTAPI/webapi/myresource/getUser/' + this.result);
    return this.object;
  }

  sendEmail(user: any) {
   return this.httpClient.post('RESTAPI/webapi/myresource/sendEmail', user);
  }

   registerTask(task: any) {
     return this.httpClient.post('RESTAPI/webapi/myresource/registerTask', task);
   }

   deleteTask(task: any) {
    return this.httpClient.delete('RESTAPI/webapi/myresource/deleteTask/' + task.taskId);
   }

   updateEmp(editObject: any) {
     return this.httpClient.put('RESTAPI/webapi/myresource/updateEmp', editObject);
   }

   getDetails() {
    return this.object;
   }
}

