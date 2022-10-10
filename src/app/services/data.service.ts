import { Injectable } from '@angular/core';
import { Diploma } from '../education/diploma/models/diploma';
import { Internship } from '../experience/internship/models/internship';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  diplomas: Diploma[] = [];
  internships: Internship[] = [];
  constructor() {
    this.diplomas = [
      {
        title: 'Senior Computer engineering student',
        date: '2020-Present',
        establishment: 'Private Polytechnic Central School Of Tunis',
      },
      {
        title: 'Applied License in Civil Engineering',
        date: '2020',
        establishment: 'Higher Institute of Technological Studies of Nabeul',
      },
      {
        title: 'Bachelor in Technical Sciences',
        date: '2016',
        establishment: 'Al-Farabi Manouba High School',
      },
    ];
    this.internships = [
      {
        title: 'Full Stack Developer | Bank of Tunisia',
        date: '10/5/2022 | present',
        briefing:
          'Developing a branch networking management system application.',
      },
      {
        title: 'Full Stack Developer | Bank of Tunisia',
        date: '10/1/2022 | 10/30/2022',
        briefing: 'Developed a WAN monitoring interface.',
      },
      {
        title: 'Front End Developer | Hortensia Agency',
        date: '6/2/2021 | 8/30/2021',
        briefing: 'Developed user interfaces using angular.',
      },
    ];
  }
  getDiploma() {
    return this.diplomas;
  }
  getInternships() {
    return this.internships;
  }
}
