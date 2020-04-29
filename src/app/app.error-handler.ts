import { Injectable, ErrorHandler } from '@angular/core';
import { Bugfender } from '@bugfender/sdk';

@Injectable()
export class AppErrorHandler extends ErrorHandler {
  constructor() {
    super();
  }

  handleError(error: Error) {
    Bugfender.sendCrash(error.message, [
        `Error: ${error.message}`,
        `Stack: ${error.stack}`,
    ].join('\n'));
  }
}
