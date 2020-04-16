import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { HomeModule } from './home/home.module';
import { ShellModule } from './shell/shell.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { BugfenderSDK } from '@bugfender/sdk';
import { environment } from '@env/environment';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AppRoutingModule, // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [
    {
      provide: BugfenderSDK,
      deps: [],
      useFactory: () => {
        const bugfender = new BugfenderSDK('<YOUR_APP_KEY_HERE>');
        bugfender.setVersion(environment.version); //App Version
        bugfender.setBuild('123'); //App Build Number
        bugfender.init().then(() => {
          bugfender.overrideConsoleMethods(); //Send all console messages to Bugfender
        });
        return bugfender;
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
