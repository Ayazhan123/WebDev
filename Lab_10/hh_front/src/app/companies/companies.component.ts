import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../company.service';
import {companies, Company} from '../models';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies = companies;

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
  }


}
