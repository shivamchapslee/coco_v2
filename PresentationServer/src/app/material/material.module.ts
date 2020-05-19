import { NgModule } from '@angular/core';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSliderModule } from '@angular/material/slider';

const MaterialComponents =[
  MatAutocompleteModule,
  MatToolbarModule,
  MatSliderModule  
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
