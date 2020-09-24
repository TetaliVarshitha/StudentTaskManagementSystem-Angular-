import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../faculty.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service: FacultyService, private router: Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.setUserLoggedOut();
    this.toastr.success('','Logout Success');
    this.router.navigate(['homepage']);
  }

}
