import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Bugfender } from '@bugfender/sdk';
import { environment } from '@env/environment';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppErrorHandler } from './app.error-handler';

Bugfender.init({
  appKey: 'uDESNbaNrXsxWHA5M0YCzHViXUuRgUsC',
  // apiURL: 'https://api.bugfender.com',
  // baseURL: 'https://dashboard.bugfender.com',
  overrideConsoleMethods: true,
  printToConsole: true,
  registerErrorHandler: true,
  version: environment.version,
  build: '2025.11.07',
  deviceName: 'Bugfender Angular Example',
});

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
