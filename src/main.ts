import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, Routes, withComponentInputBinding} from "@angular/router";

const routes: Routes = [
  {
    path: 'data',
    loadComponent: () => import('./app/router-data-input-feature/router-data-input-feature.component'),
    resolve: {
      myName: () => 'Terry'
    }
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    // withComponentInputBinding must be added to allow set inputs from the route
    provideRouter(routes, withComponentInputBinding())
  ],
})
