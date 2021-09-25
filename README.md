# AllMicroAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

En este proyecto intentaremos resumir diferentes aproximaciones para llevar a cabo Microfrontends. Las soluciones que llevaremos a cabo, será a través de un portal central desarrollado con Angular V12, con la configuración por defecto.

Cada pestaña de la aplicación, será otra aplicación en versión monorepo o multirepo, con angular u otras tecnologías.

## Aproximaciones

### Con base Angular Cli 12 por defecto

#### ng generate application

Creación microfrontends con la funcionalidad de generate applications de [Angular Cli](https://angular.io/cli/generate#application-command). Esto nos permitirá desplegar todas las aplicaciones conjuntamente o cada aplicación por separado. Además, según el build que utlicemos, utilizará la configuración global o la específica de cada subproyecto.

Además también existe un modo avanzado de configuración, para importaciones dinámicas, mediante la modificación del angular.json global. Con lo que podríamos añadir configuraciones avanzadas para lazy loading cuando cargasemos cada aplicación.

Para los dos casos de ejemplos que vamos a montar, utilizaremos una aproximación monorepo, donde tendremos todo el contenido de la aplicación en este mismo repositorio y compartiendo las mismas dependencias. Y una segunda aproximación, mediante [.submodules de git](https://git-scm.com/book/en/v2/Git-Tools-Submodules), que nos permitirá tener versionado y en otro repositorio la otra aplicación, a pesar de compartir dependencias.

- mono-app

- multi-app angular application

#### angular library

- monorepo angular library package.json

- monorepo-multi angular library

#### Webcomponents

- multirepo litelement

- multirepo stencil

- multirepo webcomponent pequeño

##### angular elements

Existen muchas aproximaciones para la utilización de webcomponents con Angular Elements, para importar proyectos con y sin lazy loading. Hay que recordar, que cuando utilizamos microfrontends, no nos referimos a importar toda una pestaña completa, sino también funcionalidades concretar.

Dado que este contenido ya lo desarrollé hace un par de años con Angular 9, os dejo el [otro repositorio donde podréis encontrar](https://github.com/jesuscuesta/angular-elements) muchas de las opciones para generar e importar angular elements en un proyecto de Angular.

#### angular others frontends

- multirepo vue con webcomponents

- multirepo lerna y otras librerías

- multirepo react

- multirepo sveltejs

- con pestaña virtual, compartiendo datos

- con configuración nginx

- con ssr

- multirepo iframe

- a través de jenkins/travis...

### Otras soluciones con Angular

- Con Base NX

- module federation

- monorepo manfredsteyer module federation

- Lerna y otras aproximaciones

### Otras tecnologías frontend

- Base React

- Base Vuejs

- Base Sveltejs

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
