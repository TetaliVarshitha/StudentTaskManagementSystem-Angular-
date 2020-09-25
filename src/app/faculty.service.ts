import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  
  private isUserLogged: any;
  private result : any;
  public object: any;
  public facultyId : any;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.isUserLogged = false;
   }

   setUserLoggedIn(): void {
     this.isUserLogged = true;
   }

   setUserLoggedOut(): void {
     this.isUserLogged = false;
     this.router.navigate(['homepage']);
   }

   getUserLogged(): any {
     return this.isUserLogged;
   }
   getAllTasks(facultyId: any): any {
    // this.facultyId = this.object.facultyId;
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllTasks/' + facultyId);
  }

  getFaculty(emailId: any): any {
    // this.facultyId = this.object.facultyId;
    return this.httpClient.get('RESTAPI/webapi/myresource/getFaculty/' + emailId);
  }

  getStudent(emailId: any): any {
    // this.facultyId = this.object.facultyId;
    return this.httpClient.get('RESTAPI/webapi/myresource/getStudent1/' + emailId);
  }

  getAllTask(): any {
    // this.facultyId = this.object.facultyId;
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllTask');
  }

  getTasks(): any {
    // this.facultyId = this.object.facultyId;
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllTasks');
  }

   getAllFaculty(): any {
     return this.httpClient.get('RESTAPI/webapi/myresource/getAllFaculty');
   }
   getAllSubmissions(subject: any): any {
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllSubmissions/' + subject);
  }

  getProfile(facultyId: any): any {
    return this.httpClient.get('RESTAPI/webapi/myresource/getProfile/' + facultyId);
  }

  getStudentProfile(studentId: any): any {
    return this.httpClient.get('RESTAPI/webapi/myresource/getStudentProfile/' + studentId);
  }

   getAllDoubts(): any {
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllDoubts');
  }

  getAllTodos(studentId : any): any {
    return this.httpClient.get('RESTAPI/webapi/myresource/getAllTodos/' + studentId);
  }

   getFacultyById(facultyId: any) {
     return this.httpClient.get('RESTAPI/webapi/myresource/getFacultyById/' + facultyId);
   }

   getReviewedDoubts(date: any) {
    return this.httpClient.get('RESTAPI/webapi/myresource/getReviewedDoubts/' + date);
  }

  getPendingDoubts() {
    return this.httpClient.get('RESTAPI/webapi/myresource/getPendingDoubts');
  }
                                                                
   getUser(emailId: any, password : any) {
    this.result = emailId + ' ' + password;
    this.object = this.httpClient.get('RESTAPI/webapi/myresource/getUser/' + this.result);
    return this.object;
  }

  check(taskId: any, studentId : any) {
    this.result = taskId + ' ' + studentId;
    return this.httpClient.get('RESTAPI/webapi/myresource/check/' + this.result);
  }

  check1(taskId: any, studentId : any) {
    this.result = taskId + ' ' + studentId;
    return this.httpClient.get('RESTAPI/webapi/myresource/check1/' + this.result);
  }

   registerFaculty(faculty: any) {
     return this.httpClient.post('RESTAPI/webapi/myresource/registerFaculty', faculty);
   }

   registertodo(todo: any) {
    return this.httpClient.post('RESTAPI/webapi/myresource/registerTodo', todo);
  }


   
   registerReview(task: any) {
    return this.httpClient.post('RESTAPI/webapi/myresource/registerReview', task);
  }

   deleteFaculty(faculty: any) {
    return this.httpClient.delete('RESTAPI/webapi/myresource/deleteFaculty/' + faculty.facultyId);
   }

   deleteTodo(t: any) {
    return this.httpClient.delete('RESTAPI/webapi/myresource/deleteTodo/' + t.todoId);
   }

   updateFaculty(editObject: any) {
     return this.httpClient.put('RESTAPI/webapi/myresource/updateFaculty', editObject);
   }
   updateDoubt(editObject: any) {
    return this.httpClient.put('RESTAPI/webapi/myresource/updateDoubt', editObject);
  }

  postFile(ImageForm: any, fileToUpload: File) {
    const endpoint = 'RESTAPI/webapi/myresource/uploadImage';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    formData.append('taskId', ImageForm.taskId);
    formData.append('studentId', ImageForm.studentId);
    formData.append('subject', ImageForm.subject);
    return this.httpClient.post(endpoint, formData);
 }

 postFile1(ImageForm: any, fileToUpload: File) {
  const endpoint = 'RESTAPI/webapi/myresource/uploadProfile';
  const formData: FormData = new FormData();
  formData.append('Image', fileToUpload, fileToUpload.name);
  formData.append('facultyId', ImageForm.facultyId);
  return this.httpClient.post(endpoint, formData);
}

postFile2(ImageForm: any, fileToUpload: File) {
  const endpoint = 'RESTAPI/webapi/myresource/uploadStudentProfile';
  const formData: FormData = new FormData();
  formData.append('Image', fileToUpload, fileToUpload.name);
  formData.append('studentId', ImageForm.studentId);
  return this.httpClient.post(endpoint, formData);
}

   getDetails() {
    return this.object;
   }
}
