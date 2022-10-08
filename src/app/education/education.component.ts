import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Diploma } from './diploma/models/diploma';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  diplomas: Diploma[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.diplomas = this.dataService.getDiploma();
  }
}
