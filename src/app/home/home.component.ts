import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import { Bugfender } from '@bugfender/sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  quote: string | undefined;
  isLoading = false;

  constructor(private quoteService: QuoteService) {
    Bugfender.log('HomeComponent constructor');
    console.log('This is a regular log');
  }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }

  generateCrash() {
    (this as any).methodDoesNotExist();
  }

  async triggerUncaughtPromise() {
    let promise = new Promise((_, reject) => reject());
    await promise;
  }

  async openFeedbackModal() {
    const result = await Bugfender.getUserFeedback();

    if (result.isSent) {
      console.log('Feedback sent! URL: ', result.feedbackURL);
    } else {
      console.log(`The user didn't provide feedback… :(`);
    }
  }
}
