import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterPageRoutingModule } from './filter-page-routing.module';
import { FilteredListComponent } from './filter-base/filtered-list/filtered-list.component';
import { ProductfiltersComponent } from './filter-base/productfilters/productfilters.component';
import { FilterBaseComponent } from './filter-base/filter-base.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FilteredListComponent,
    ProductfiltersComponent,
    FilterBaseComponent,
  ],
  imports: [CommonModule, FilterPageRoutingModule, ReactiveFormsModule],
})
export class FilterPageModule {}
