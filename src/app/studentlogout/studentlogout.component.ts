import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-studentlogout',
  templateUrl: './studentlogout.component.html',
  styleUrls: ['./studentlogout.component.css']
})
export class StudentlogoutComponent implements OnInit {

  constructor(private service: StudentService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.setUserLoggedOut();
    this.toastr.success('','Logout Success');
    this.router.navigate(['homepage']);
  }

}
