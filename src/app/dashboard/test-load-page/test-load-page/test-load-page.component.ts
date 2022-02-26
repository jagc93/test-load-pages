import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-test-load-page',
  templateUrl: './test-load-page.component.html',
  styleUrls: ['./test-load-page.component.css']
})
export class TestLoadPageComponent implements OnInit, AfterViewInit {

  public isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    $('#animateTestLoadPage').hide(0);
    $('#animateTestLoadPage').show(600);
  }

  public submit(elementUrl: any, iterators: string, timeOut: string): void {

    console.log(elementUrl.value, iterators, timeOut);

    if (elementUrl.value !== '' && elementUrl.validity.valid) {
      this.isLoading = true;
      const url = elementUrl.value;
      const iterations = iterators !== undefined && iterators !== null && iterators !== '' && iterators !== '0' ? Number(iterators) : 1;
      const sleep = timeOut !== undefined && timeOut !== null && timeOut !== '' ? Number(timeOut) : 0;
      let count = 0;

      const interval = setInterval(() => {

        setTimeout(() => {
          if (count < iterations) {
            window.open(url);
            count++;
          } else {
            clearInterval(interval);
            setTimeout(() => {
              this.isLoading = false;
            }, 100);
          }
        }, 0);

      }, sleep);
    }
  }
}
