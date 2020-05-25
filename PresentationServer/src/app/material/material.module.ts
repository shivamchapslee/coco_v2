import { NgModule } from '@angular/core';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatListModule } from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



const MaterialComponents =[
  MatAutocompleteModule,
  MatToolbarModule,
  MatSliderModule,
  MatInputModule,
  MatTableModule,
  MatCardModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatDividerModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatSelectModule  
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
