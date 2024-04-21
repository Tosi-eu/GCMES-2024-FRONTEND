# SosToolFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.
=======
# SosToolFrontend dependecies

npm install -g @‌angular/cli
npm i bulma
npm i @‌angular/material
npm i @‌angular/forms
npm i @‌angular/routes
npm i @‌angular/platform-browser-dynamic
npm i @‌angular/core
npm i @‌angular-devkit/build-angular

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

=======

# FIX

- Navigate to src\app\components\template\header\header.component.html and change the swagger's port to 8081
- Navigate to src\environments\environment.ts and do the same thing
- When you you try to execute ng build: If your get the budget exceeded error, navigate to angular.json and replace the "budget" value with:

              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "3mb",
                  "maximumError": "4mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "3mb",
                  "maximumError": "4mb"
                }
              ]
And if get the same error, just adjust maximumError's value in the correspondent "type".

- After this, access evironments/environments.prod.ts and replace with:

            export const environment = {
            production: false,
            baseUrl: "http://localhost:8081"
            }; 