import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proximity-owl',
  templateUrl: './proximity-owl.component.html',
  styleUrls: ['./proximity-owl.component.scss'],
})
export class ProximityOwlComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.addEventListener('mousemove', (e) => {
      const anchor = document.getElementById('owl__anchor');
      if (anchor) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const rekt = anchor.getBoundingClientRect();
        const anchorX = rekt.left + rekt.width / 2;
        const anchorY = rekt.top + rekt.height / 2;
        const angleDeg = angle(anchorX, anchorY, mouseX, mouseY);
        const eyes = document.querySelectorAll<HTMLElement>('.eye');
        eyes.forEach((eye) => {
          eye.style.transform = `rotate(${90 + angleDeg}deg)`;
        });
      }
      function angle(cx: number, cy: number, ex: number, ey: number) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = (rad * 180) / Math.PI;
        return deg;
      }
    });
  }
}
