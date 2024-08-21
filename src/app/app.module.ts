import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { CalculatorOutputComponent } from './calculator-output/calculator-output.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorInputComponent,
    CalculatorOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
