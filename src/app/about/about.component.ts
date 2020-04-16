import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { BugfenderSDK } from '@bugfender/sdk';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;

  constructor(protected readonly bugfender: BugfenderSDK) {
    bugfender.log('AboutComponent constructor');
  }

  ngOnInit() {}
}
