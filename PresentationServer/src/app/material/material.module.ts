import { NgModule } from '@angular/core';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
const MaterialComponents =[
  MatAutocompleteModule,
  MatToolbarModule,
  MatSliderModule,
  MatInputModule,
  MatTableModule,
  MatCardModule,
  MatPaginatorModule  
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
