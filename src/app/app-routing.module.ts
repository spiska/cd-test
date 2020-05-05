import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyWrapperComponent } from './lazy-wrapper/lazy-wrapper.component';


const routes: Routes = [{
  path: '',
  component: LazyWrapperComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./lazy-module/lazy-module.module').then(m => m.LazyModuleModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
