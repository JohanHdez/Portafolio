import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Typewriter from 't-writer.js'
import {LinkModel} from "../model/model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {

  @ViewChild('asTitle') asTitle!: ElementRef;
  links: Array<LinkModel> = [
    {
      link: 'mailto:jshernandez97@gmail.com',
      icon: '<i class="uil uil-envelope"></i>'
    },
    {
      link: 'https://www.linkedin.com/in/johan-front-end-developer/',
      icon: '<i class="uil uil-linkedin"></i>'
    },
    {
      link: 'https://github.com/JohanHdez',
      icon: '<i class="uil uil-github-alt"></i>'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initEffect();
  }

  initEffect = () => {
    const target = this.asTitle.nativeElement;

    const options = {
      loop: true,
      typeColor: 'black'
    }

    const writer = new Typewriter(target, options)

    writer.type('Johan Hernández')
      .changeCursorColor('black')
      .rest(25000)
      .start();
  }
}
