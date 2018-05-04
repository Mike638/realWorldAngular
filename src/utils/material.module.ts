import { NgModule } from '@angular/core';
import 'hammerjs';
import {
  MatInputModule, MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule, MatRadioModule,
  MatSelectModule, MatAutocompleteModule,
  MatCardModule, MatListModule, MatTabsModule,
  MatMenuModule, MatSidenavModule, MatToolbarModule,
  MatIconModule, MatChipsModule,
  MatDialogModule, MatSnackBarModule,
  MatTableModule, MatPaginatorModule, MatSortModule,
  MatStepperModule
} from '@angular/material';

const modules = [
  MatInputModule, MatButtonModule, MatButtonToggleModule,
  MatCheckboxModule, MatRadioModule,
  MatSelectModule, MatAutocompleteModule,
  MatCardModule, MatListModule, MatTabsModule,
  MatMenuModule, MatSidenavModule, MatToolbarModule,
  MatIconModule, MatChipsModule,
  MatDialogModule, MatSnackBarModule,
  MatTableModule, MatPaginatorModule, MatSortModule,
  MatStepperModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule { }
