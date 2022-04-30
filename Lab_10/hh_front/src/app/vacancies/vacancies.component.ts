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
    this.getVacancies();
  }

  getVacancies() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(vacancies.find(vacancies => vacancies.company));
      this.vacancyService.getVacancies(id).subscribe((vacancies) => {
        this.vacancies = vacancies;
      })
    })
  }

  goBack() {
    this.location.back();
  }
}
