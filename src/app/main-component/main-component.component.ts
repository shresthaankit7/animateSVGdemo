import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import * as anime from 'animejs';

@Component({
  selector: 'app-main-component',
  template: `<div  (mouseenter)="mouseEnter()" (mouseleave)="mouseLeave()">
  <svg #myDiv version="1.1" xmlns:x="&ns_extend;" xmlns:i="&ns_ai;" xmlns:graph="&ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="320px" height="480px" viewBox="0 0 320 480"
    enable-background="new 0 0 320 480" xml:space="preserve">
      <g class="penguBackGround" opacity="100">
        <path fill="red" d="M195.227,334.177v19.446c0.115-0.014,0.23-0.03,0.347-0.04c1.827-5.943,11.234-10.535,22.828-10.929
			C214.871,337.706,205.842,334.177,195.227,334.177z" />
      </g>
  </svg>
  <div class="square"></div>
</div>`,
  styleUrls: ['./main-component.component.css']
})

export class MainComponentComponent implements OnInit, AfterViewInit {
  public welcomeMsg = "test";

  public svgPengu;
  @ViewChild('myDiv') myDiv: ElementRef;

  constructor() {
  
  }

  ngAfterViewInit() {
    console.log("I AM VIEW INIT COMPLETED!!!");
    // console.log(this.myDiv.nativeElement.innerHTML);
    

    console.log(this.svgPengu)
  }

  ngOnInit() {
    console.log("onInit COMPLETED!!!");
    console.log(this.myDiv.nativeElement.innerHTML);
    this.svgPengu = this.myDiv.nativeElement.innerHTML;

  }

  mouseEnter() {
    console.log("MouseENter");
    this.svgPengu = anime({
      targets: '.penguBackGround',
      translateX: [0, 100], // from 100 to 250
      delay: 500,
      direction: 'alternate',
      loop: false
    });
    
  }

  mouseLeave() {
    console.log("MouseLeave");
    this.svgPengu = this.myDiv.nativeElement.innerHTML;
    this.svgPengu = anime({
      targets: '.penguBackGround',
      translateX: [100, 0], // from 100 to 250
      delay: 500,
      direction: 'alternate',
      loop: false
    });
  }

}

