import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'projects/mono-app/src/app/app.component';

const routes: Routes = [
  { path: 'mono-app', component: AppComponent },
  {
    path: 'mono-lazy-app',
    loadChildren: () =>
      import('../../projects/mono-repo-lazy/src/app/app.module').then(
        (m) => m.AppMonoLazyModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
