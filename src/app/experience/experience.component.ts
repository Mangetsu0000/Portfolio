import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Internship } from './internship/models/internship';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  internships: Internship[] = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.internships = this.dataService.getInternships();
  }
}
