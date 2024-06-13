import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainWiewComponent } from './Pages/main-wiew/main-wiew.component';

const routes: Routes = [
  {
    path: '',
    component: MainWiewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
