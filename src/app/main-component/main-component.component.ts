import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})

export class MainComponentComponent implements OnInit, AfterViewInit {
  public welcomeMsg = "test";

  public svgPengu;

  constructor() {
  
  }

  ngAfterViewInit() {
    console.log("I AM VIEW INIT COMPLETED!!!");
    // console.log(this.myDiv.nativeElement.innerHTML);
    console.log(this.svgPengu)
  }

  ngOnInit() {
    console.log("onInit COMPLETED!!!");
  }

  mouseEnter() {
    console.log("MouseENter");
    anime({
      targets: '#penguBackGround',
      translateX: [0, 100], // from 100 to 250
      delay: 500,
      direction: 'alternate',
      loop: false
    });
    
  }

  mouseLeave() {
    console.log("MouseLeave");
    anime({
      targets: '#penguBackGround',
      translateX: [100, 0], // from 100 to 250
      delay: 500,
      direction: 'alternate',
      loop: false
    });
  }

}

