import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  });

  title = 'mangetsu_portfolio';

  constructor() {}
  ngOnInit(): void {
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element: any) => {
      this.observer.observe(element);
    });
  }
}
