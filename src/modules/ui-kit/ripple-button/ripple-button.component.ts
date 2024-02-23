import { Component, Host, OnInit, Optional, SkipSelf } from '@angular/core';
import { ParentComponent } from '../../../app/parent/parent.component';
import { ParentAboveComponent } from '../../../app/parent-above/parent-above.component';

@Component({
  selector: 'app-ripple-button',
  templateUrl: './ripple-button.component.html',
  styleUrls: ['./ripple-button.component.scss']
})
export class RippleButtonComponent implements OnInit {

  constructor(
    @Optional() public parentComponent: ParentComponent,
    @Optional() public parentAbove: ParentAboveComponent,
  ) {
  }

  ngOnInit(): void {

  }

  fuckiingClick() {

  }

}
