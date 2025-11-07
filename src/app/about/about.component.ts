import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Bugfender } from '@bugfender/sdk';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: false,
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;

  constructor() {
    Bugfender.log('AboutComponent constructor');
  }

  ngOnInit() {}
}
