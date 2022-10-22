import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripple-button',
  templateUrl: './ripple-button.component.html',
  styleUrls: ['./ripple-button.component.scss']
})
export class RippleButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('changes made in first merge request');
    console.log('changes made in first merge request in another commit ');
    console.log('temp 3 ');
    console.log('temp 3-2');
  }

}
