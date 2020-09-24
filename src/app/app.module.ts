import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FacultyregistrationComponent } from './facultyregistration/facultyregistration.component';
import { StudentregistrationComponent } from './studentregistration/studentregistration.component';
import { AdminComponent } from './admin/admin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { FacultyloginComponent } from './facultylogin/facultylogin.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { ViewallfacultyComponent } from './viewallfaculty/viewallfaculty.component';
import { ViewfacultybyidComponent } from './viewfacultybyid/viewfacultybyid.component';
import { ViewallstudentsComponent } from './viewallstudents/viewallstudents.component';
import { ViewstudentbyidComponent } from './viewstudentbyid/viewstudentbyid.component';
import { DeletefacultyComponent } from './deletefaculty/deletefaculty.component';
import { DeletestudentComponent } from './deletestudent/deletestudent.component';
import { PageoffacultyComponent } from './pageoffaculty/pageoffaculty.component';
import { PageofstudentComponent } from './pageofstudent/pageofstudent.component';
import { GivetaskComponent } from './givetask/givetask.component';
import { DisplaytasksComponent } from './displaytasks/displaytasks.component';
import { GivereviewComponent } from './givereview/givereview.component';
import { DisplaydoubtsComponent } from './displaydoubts/displaydoubts.component';
import { FacultyprofileComponent } from './facultyprofile/facultyprofile.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { DisplayalltasksComponent } from './displayalltasks/displayalltasks.component';
import { PostdoubtComponent } from './postdoubt/postdoubt.component';
import { DisplayalldoubtsComponent } from './displayalldoubts/displayalldoubts.component';
import { CheckreviewComponent } from './checkreview/checkreview.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DisplaymydoubtsComponent } from './displaymydoubts/displaymydoubts.component';
import { SubmitComponent } from './submit/submit.component';
import { LogoutComponent } from './logout/logout.component';
import { StudentlogoutComponent } from './studentlogout/studentlogout.component';
import { ViewsubmissionsComponent } from './viewsubmissions/viewsubmissions.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { TodoComponent } from './todo/todo.component';

const appRoot: Routes = [{path: '', component: HomeComponent},
                         {path: 'facultyregistration', component: FacultyregistrationComponent},
                         {path: 'studentregistration', component: StudentregistrationComponent},
                         {path: 'admin', component: AdminComponent},
                         {path: 'adminpage',
                          component: AdminpageComponent,
                        children: [
                          {path: 'viewallfaculty', component: ViewallfacultyComponent},
                          {path: 'viewfacultybyid', component: ViewfacultybyidComponent},
                          {path: 'viewallstudents', component: ViewallstudentsComponent},
                          {path: 'viewstudentbyid', component: ViewstudentbyidComponent},
                          {path: 'deletefaculty', component: DeletefacultyComponent},
                          {path: 'deletestudent', component: DeletestudentComponent},
                      

                        ]},
                         {path: 'facultylogin', component: FacultyloginComponent},
                         {path: 'studentlogin/forgotpassword', component: ForgotpasswordComponent},
                         {path: 'pageoffaculty', 
                         component: PageoffacultyComponent,
                        children: [
                          {path: 'viewallstudents', component: ViewallstudentsComponent},
                          {path: 'viewstudentbyid', component: ViewstudentbyidComponent},
                          {path: 'givereview', component: GivereviewComponent},
                          {path: 'displaydoubts', component: DisplaydoubtsComponent},
                          {path: 'givetask', component: GivetaskComponent},
                          {path: 'displaytasks', component: DisplaytasksComponent},
                          {path: 'facultyprofile', component: FacultyprofileComponent},
                          {path: 'viewsubmissions', component: ViewsubmissionsComponent}
                        ]},
                        {path: 'pageofstudent', 
                        component: PageofstudentComponent,
                        children: [
                         {path: 'studentprofile', component: StudentprofileComponent},
                         {path: 'displayalltasks', component: DisplayalltasksComponent},
                         {path: 'postdoubt', component: PostdoubtComponent},
                         {path: 'checkreview', component: CheckreviewComponent},
                         {path: 'displaymydoubts', component: DisplaymydoubtsComponent},
                         {path: 'displayalldoubts', component: DisplayalldoubtsComponent},
                         {path: 'submit', component: SubmitComponent},
                         {path: 'todo', component: TodoComponent},
                        ]},

                        
                         {path: 'studentlogin', component: StudentloginComponent},
                         {path: 'aboutus', component: AboutusComponent},
                         {path: 'contactus', component: ContactusComponent},
                         {path: 'adminpage/', component: LogoutComponent},
                         {path: 'pageoffaculty/', component: LogoutComponent},
                         {path: 'pageofstudent/', component: StudentlogoutComponent},
                         {path: 'homepage', component: HomeComponent},
                        ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacultyregistrationComponent,
    StudentregistrationComponent,
    AdminComponent,
    AdminpageComponent,
    FacultyloginComponent,
    StudentloginComponent,
    ViewallfacultyComponent,
    ViewfacultybyidComponent,
    ViewallstudentsComponent,
    ViewstudentbyidComponent,
    DeletefacultyComponent,
    DeletestudentComponent,
    PageoffacultyComponent,
    PageofstudentComponent,
    GivetaskComponent,
    DisplaytasksComponent,
    GivereviewComponent,
    DisplaydoubtsComponent,
    FacultyprofileComponent,
    StudentprofileComponent,
    DisplayalltasksComponent,
    PostdoubtComponent,
    DisplayalldoubtsComponent,
    CheckreviewComponent,
    AboutusComponent,
    ContactusComponent,
    DisplaymydoubtsComponent,
    SubmitComponent,
    LogoutComponent,
    StudentlogoutComponent,
    ViewsubmissionsComponent,
    ForgotpasswordComponent,
    TodoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({ timeOut : 3000, positionClass: 'toast-top-right', preventDuplicates: true }),
    RouterModule.forRoot(appRoot)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
