# Angular SDK examples
> Currently, the project is using Angular 14.2.4.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4

The goal of this project is to show one way to set up the Split SDK in Angular.

## Getting started
_Optional:_ If `nvm` is locally installed, run `nvm i` to set the required Node version. 
- `npm install --legacy-peer-deps`
- `npm start` will start a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

>_Note:_ To effectively test the SDK, you need to set the corresponding Browser [Api key](https://help.split.io/hc/en-us/articles/360020448791-JavaScript-SDK#2-instantiate-the-sdk-and-create-a-new-split-client). 
>The API key is available on your *Organization Settings* page, on the *APIs* tab. Remember to choose `browser` type.
>In addition to that, you may want to create some Split/s in the admin and then update [the list of features defined in the code example](https://github.com/splitio/angular-sdk-examples/blob/efant_updateExample/src/app/splitio.service.ts#L27-L31).
> Documentation can be found at - https://help.split.io/hc/en-us/articles/6495326064397-Angular-utilities

## Explanations

1)	Import the utilities into your project
Import the utilities into your project using the following NPM command:
- `npm install --save @splitsoftware/splitio-angular@0.3.0 --legacy-peer-deps`

2)	Instantiate the service
•	Import and inject the service into a service file
•	Create an instance of the service by initializing the Split configuration e.g through “initPlugin” method
•	make sure you add your Split SDK
•	make sure you add your default key
•	Create a method that takes a key to initialise a client (singleton) 
•	Call initClient & pass the key
•	Depending on your use-case, you can create methods sdkReady, sdkReadyTimedOut, sdkReadyFromCache and sdkUpdate from the event observables exposed by the SDK.

3)	Using the service
•	In your component, import the created service file and inject the service
•	Within your constructor, call the “initPlugin” method to instantiate the service
•	Initialise the client with a new key – perhaps the user key you want to serve a treatment
•	You can now finally use any of the created methods like sdkReady, to check if the SDK is ready before you make a getTreatment or getTreatmentWithConfig call.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

If you need help with Split usage, please reach out to support@split.io or temitope.ogunrekun@split.io
