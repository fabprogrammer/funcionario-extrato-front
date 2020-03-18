import { Component, OnInit } from '@angular/core';
import { Funcionario } from '../models/functionario';
import { FuncionarioService } from '../services/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent implements OnInit {

  funcionario = {} as Funcionario
  funcionarios: Funcionario[];

  constructor(private funcionarioService: FuncionarioService,private router: Router) { }

  ngOnInit(){
    
  }

  onClickExtrato(){
    this.router.navigate(['extratos'])
  }

  onClickFuncionario(){
    this.router.navigate(['funcionarios'])
  }


  onPesquisar(){
    this.funcionarioService.getFuncionarios().subscribe((funcionarios:Funcionario[])=>{
      this.funcionarios = funcionarios;
      console.log(this.funcionarios);
    })
  }

  displayedColumns: string[] = ['id', 'nome', 'matricula', 'funcao'];
}



