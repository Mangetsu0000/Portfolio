import { Component, Input, OnInit } from '@angular/core';
import { Diploma } from './models/diploma';

@Component({
  selector: 'app-diploma',
  templateUrl: './diploma.component.html',
  styleUrls: ['./diploma.component.scss'],
})
export class DiplomaComponent implements OnInit {
  @Input() diploma!: Diploma;
  constructor() {}

  ngOnInit(): void {}
}
