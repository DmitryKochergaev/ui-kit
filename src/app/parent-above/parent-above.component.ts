import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-above',
  templateUrl: './parent-above.component.html',
  styleUrls: ['./parent-above.component.scss']
})
export class ParentAboveComponent implements OnInit {

  public shitVar = 'fuck'

  constructor() { }

  ngOnInit(): void {
  }

}
