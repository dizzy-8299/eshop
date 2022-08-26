import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterBaseComponent } from './filter-base/filter-base.component';

const routes: Routes = [
  {
    path: '',
    component: FilterBaseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterPageRoutingModule {}
