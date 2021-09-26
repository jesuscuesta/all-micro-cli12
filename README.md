# AllMicroAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.7.

En este proyecto intentaremos resumir diferentes aproximaciones para llevar a cabo Microfrontends. Las soluciones que llevaremos a cabo, será a través de un portal central desarrollado con Angular V12, con la configuración por defecto.

Cada pestaña de la aplicación, será otra aplicación en versión monorepo o multirepo, con angular u otras tecnologías.

## Aproximaciones

1. Angular
   1. Angular Cli por defecto
      1. ng g application
         1. mono repo
         2. mono repo con lazy loadgin
         3. multi repo con submodules
         4. multi repo con importación
      2. angular library
         1. Mono repo importación
         2. Multi repo packaje.json
         3. Multi repo CDN
      3. Webcomponents
         1. Angular Elements Multi-repo y Mono-repo
            1. Con importación
            2. Con lazy loading
            3. Con ngx-build
            4. Con librería externa para importación
            5. Con CDN
         2. Multi repo Lit-element
         3. Multi repo Stenciljs
         4. Multi repo Vanyllajs
      4. Iframes
      5. Tabs virtuales
      6. SSR
      7. Configuración Ngnix
      8. A través de Jenkins/Travis
   2. Extract Webpack
      1. Module federation
      2. Library Manfred Steyer Module federation
   3. NX
      1. La mayoría de las soluciones de Angular Cli
      2. Plugins

2. Otras tecnologías frontend para el portal central
   1. Portal con Lerna
   2. Portal con Reactjs
   3. Portal con Vuejs
   4. Portal con Sveltejs

### Con base Angular Cli 12 por defecto

#### ng generate application

Creación microfrontends con la funcionalidad de generate applications de [Angular Cli](https://angular.io/cli/generate#application-command). Esto nos permitirá desplegar todas las aplicaciones conjuntamente o cada aplicación por separado. Además, según el build que utlicemos, utilizará la configuración global o la específica de cada subproyecto.

Para generar cada subaplicación hemos utilizado `ng g application nombre-aplicacion`.

Los comandos que tenemos para generar las subaplicaciones por separado:

```js
"build": "ng build",
"build:mono-app": "ng build",
"build:multi-app": "ng build",
```

También podremos compilar para desarrollar tanto todas las aplicaciones conjuntamente, como por separado.

```js
"start": "ng serve",
"start:mono-app": "ng serve mono-app",
"start:multi-app": "ng serve multi-app",
```

Además también existe un modo avanzado de configuración, para importaciones dinámicas, mediante la modificación del angular.json global. Con lo que podríamos añadir configuraciones avanzadas para lazy loading cuando cargasemos cada aplicación.

Para los dos casos de ejemplos que vamos a montar, utilizaremos una aproximación monorepo, donde tendremos todo el contenido de la aplicación en este mismo repositorio y compartiendo las mismas dependencias. Y una segunda aproximación, mediante [.submodules de git](https://git-scm.com/book/en/v2/Git-Tools-Submodules), que nos permitirá tener versionado y en otro repositorio la otra aplicación, a pesar de compartir dependencias.

##### mono-app sin Lazy Loading

##### mono-repo-lazy con Lazy Loading

Es la misma opción que la de mono-app, pero cargándola como lazy loading. A diferencia del mono-app, si intentamos cargar esta aplicación individualmente no funcionará. En el caso de que quisiésemos que nos funcionase, deberíamos modificar algunas configuraciones de la aplicación.

##### multi-app angular application

Para probar esta aplicación, utilizaremos la funcionalidad de .submodules de git.

#### angular library

- monorepo angular library package.json

- monorepo-multi angular library

#### Webcomponents

##### multirepo litelement

##### multirepo stencil

##### multirepo webcomponent vanylla js

##### angular elements

Existen muchas aproximaciones para la utilización de webcomponents con Angular Elements, para importar proyectos con y sin lazy loading. Hay que recordar, que cuando utilizamos microfrontends, no nos referimos a importar toda una pestaña completa, sino también funcionalidades concretar.

Dado que este contenido ya lo desarrollé hace un par de años con Angular 9, os dejo el [otro repositorio donde podréis encontrar](https://github.com/jesuscuesta/angular-elements) muchas de las opciones para generar e importar angular elements en un proyecto de Angular.

#### angular others frontends

##### multirepo vue con webcomponents

##### multirepo lerna y otras librerías

##### multirepo react

##### multirepo sveltejs

##### con pestaña virtual, compartiendo datos

##### con configuración nginx

##### con ssr

##### multirepo iframe

##### a través de jenkins/travis

### Otras soluciones con Angular

#### Con Base NX

#### module federation

#### monorepo manfredsteyer module federation

#### Lerna y otras aproximaciones

### Otras tecnologías frontend

#### Base React

#### Base Vuejs

#### Base Sveltejs


