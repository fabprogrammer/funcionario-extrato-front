import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { ExtratosComponent } from './extratos/extratos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';


import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import { ExtratosService } from './services/extratos.service';
import { FuncionarioService } from './services/funcionario.service';

@NgModule({
  declarations: [
    AppComponent,
    FuncionariosComponent,
    ExtratosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
  
  ],
  providers: [ExtratosService,FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
