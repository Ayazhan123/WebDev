import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hh_front';

  username = '';
  password = '';

  ngOnInit(): void {
    const token = localStorage.getItem('token');
  }

  constructor(private companyService: CompanyService) { }


}
