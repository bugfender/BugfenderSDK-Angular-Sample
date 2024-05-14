# Bugfender

[Bugfender](https://bugfender.com) is a game-changing platform that logs every detail your users experience and feeds the data straight to an easy-to-use web console. Bugfender SDK is multi-platform and available for mobile and web apps, so you can use the same tool for all your apps.

## Bugfender SDK Angular Sample

This repository contains a sample Angular application with Bugfender SDK to collect user logs.

### Running the app

To check the app in your local machine, first you need to edit the code on `src/app/app.module.ts` and change the `<YOUR_APP_KEY_HERE>` for you Bugfender App Key. Then you can run the app using:

- Ensure Node.js 18 is installed on your system.
- `npm ci`
- `npm start`

_You can get an app key at [bugfender.com](https://bugfender.com/)_

## Links

- [Official Angular SDK Docs](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-angular)
- [Bugfender JS SDK reference documentation](https://js.bugfender.com/)

If you plan to use Bugfender SDK with another JavaScript framework, check the following documentation:

- [Vanilla JavaScript](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-javascript-on-browsers/): Bugfender SDK for browsers
- [React](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-react/): Bugfender SDK for React
- [Vue](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-vue/): Bugfender SDK for Vue
- [Svelte](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-svelte/): Bugfender SDK for Svelte

## Bugfender Quick Start Guide

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

  Bugfender.log('Hello world!');
  ```

  **⚠️ Remember to change `<YOUR_APP_KEY_HERE>`** with the app key of your app. It's also recommended to add version & build numbers.
