import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TestsService } from './tests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {



  constructor(private fb: FormBuilder, private testsService: TestsService) {
  }

  ngOnInit(): void {
    console.log('form', this.form);
    console.log('testStringVar', this.testStringVar);

  }


  public form = this.fb.group({
    first: ['1'],
    second: ['2'],
  });

  public testStringVar = this.testsService.testMethod();

}
