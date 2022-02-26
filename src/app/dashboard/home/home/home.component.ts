import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    const data = this.getRandomAnimation();

    for (let i = 1; i <= 17; i++) {
        
      $(`.animateHome${i}`).hide(data.hide);
      $(`.animateHome${i}`).show(data.show);
      }
  }

  private getRandomAnimation(): { hide: number; show: number; } {
    const hide = Math.floor(Math.random() * (300 - 0)) + 0;
    const show = Math.floor(Math.random() * (600 - 300)) + 300;

    return { hide, show };
  }
}
