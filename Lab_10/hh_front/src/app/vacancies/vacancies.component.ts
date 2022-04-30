import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { vacancies, Vacancy } from '../models';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css'],
})
export class VacanciesComponent implements OnInit {

  vacancies = vacancies ;

  constructor(private vacancyService: VacancyService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
