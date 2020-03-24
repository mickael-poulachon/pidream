import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';


const routes: Routes = [{path: '', component: HomeComponent,},
  {
    path: 'config',
    loadChildren: () => import('./pages/config/config.module')
      .then(mod => mod.ConfigModule)
  },
  {path: '**', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
