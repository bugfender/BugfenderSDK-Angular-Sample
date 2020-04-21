# Bugfender

Bugfender is a game-changing platform that logs every detail your users experience and feeds the data straight to an easy-to-use web console. Bugfender SDK is multi-platform and available for mobile and web apps, so you can use the same tool for all your apps.

# Bugfender SDK Angular Sample

This repository contains a sample Angular application with Bugfender SDK to collect user logs.

If you plan to use Bugfender SDK on an **vanilla Javascript app**, visit https://github.com/bugfender/BugfenderSDK-JS-Sample

## Running the app

To check the app in your local machine, first you need to edit the code on `src/app/app.module.ts` and change the `<YOUR_APP_KEY_HERE>` for you Bugfender App Key. Then you can run the app using:

```bash
npm install
npm start
```

_You can get an app key at [bugfender.com](https://bugfender.com/)_

# Bugfender SDK Angular Documentation

## SDK Installation

Here are the main points to getting Bugfender working on your apps:

- Get an app key at [bugfender.com](https://bugfender.com/)
- Install SDK npm package:

```
npm i @bugfender/sdk
```

- Init Bugfender SDK in your Application Module:

```typescript
import { BugfenderSDK } from '@bugfender/sdk';
```

```typescript
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
```

Remember to change `<YOUR_APP_KEY_HERE>` with the app key of your app and also your version & build numbers.

## Using Bugfender

After you have initialized the SDK, you can start using it in your components:

```typescript
import { BugfenderSDK } from '@bugfender/sdk';

export class HomeComponent {
  constructor(protected readonly bugfender: BugfenderSDK) {
    bugfender.log('HomeComponent constructor');
  }
}
```

## More information

### Docs

For more information on all methods available, please go to the [Bugfender JS SDK reference documentation](https://js.bugfender.com/).

### SDK status

The SDK is suitable for production. Please feel free to open an issue or contact us at [bugfender.com](https://bugfender.com) .
