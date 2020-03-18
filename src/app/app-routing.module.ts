import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtratosComponent } from './extratos/extratos.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { MatToolbarModule } from '@angular/material/toolbar';


const routes: Routes = [
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: 'extratos', component: ExtratosComponent },
  { path: '', redirectTo: '/funcionarios', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, MatToolbarModule]
})
export class AppRoutingModule { }
