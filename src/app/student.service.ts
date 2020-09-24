import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private isUserLogged: any;
  private result: any;
  private object: any;

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

   getAllStudents(): any {
     return this.httpClient.get('RESTAPI/webapi/myresource/getAllStudents');
   }

   getReviews(studentId : any): any {
    return this.httpClient.get('RESTAPI/webapi/myresource/getReviews/' + studentId);
  }

   getStudentById(studentId: any) {
     return this.httpClient.get('RESTAPI/webapi/myresource/getStudentById/' + studentId);
   }
   getMyDoubts(studentId: any) {
    return this.httpClient.get('RESTAPI/webapi/myresource/getMyDoubts/' + studentId);
  }

   registerStudent(student: any) {
     return this.httpClient.post('RESTAPI/webapi/myresource/registerStudent', student);
   }

   registerDoubt(doubt: any) {

    return this.httpClient.post('RESTAPI/webapi/myresource/registerDoubt', doubt);
  }

   getUser(emailId: any, password : any) {
    this.result = emailId + ' ' + password;
    this.object =  this.httpClient.get('RESTAPI/webapi/myresource/getStudent/' + this.result);
    return this.object;
  }

   deleteStudent(student: any) {
    return this.httpClient.delete('RESTAPI/webapi/myresource/deleteStudent/' + student.studentId);
   }

   updateStudent(editObject: any) {
     return this.httpClient.put('RESTAPI/webapi/myresource/updateStudent', editObject);
   }

   getDetails() {
    return this.object;
   }
}
