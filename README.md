# Bugfender

[Bugfender](https://bugfender.com) is a game-changing platform that logs every detail your users experience and feeds the data straight to an easy-to-use web console. Bugfender SDK is multi-platform and available for mobile and web apps, so you can use the same tool for all your apps.

## Bugfender SDK Angular Sample

This repository contains a sample Angular application with Bugfender SDK to collect user logs.

If you plan to use Bugfender SDK on an **vanilla Javascript app**, visit https://github.com/bugfender/BugfenderSDK-JS-Sample

## Links

- [Official Angular SDK Docs](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-angular)
- [Bugfender JS SDK reference documentation](https://js.bugfender.com/)

## Quick Start Guide

To get Bugfender working on your apps, you will need to:

- Get an app key at [bugfender.com](https://bugfender.com/)
- `npm i @bugfender/sdk`. Install SDK npm package.
- Init Bugfender SDK in your Application Module:

```typescript
Bugfender.init({
  appKey: '<YOUR_APP_KEY_HERE>',
  // apiURL: 'https://api.bugfender.com',
  // baseURL: 'https://dashboard.bugfender.com',
  // overrideConsoleMethods: true,
  // printToConsole: true,
  // registerErrorHandler: true,
  // logBrowserEvents: true,
  // logUIEvents: true,
  // version: '',
  // build: '',
});
```

Remember to change `<YOUR_APP_KEY_HERE>` with the app key of your app.

### SDK status

The SDK is suitable for production. Please feel free to open an issue or contact us at [bugfender.com](https://bugfender.com).
