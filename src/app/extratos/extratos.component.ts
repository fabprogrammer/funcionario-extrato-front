import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExtratosService } from '../services/extratos.service';
import { Extrato } from '../models/extrato';

@Component({
  selector: 'app-extratos',
  templateUrl: './extratos.component.html',
  styleUrls: ['./extratos.component.css']
})
export class ExtratosComponent implements OnInit {

  constructor(private router: Router,private extratosService: ExtratosService) { }
  extrato = {} as Extrato
  extratos: Extrato[];


  ngOnInit(): void {
  }

  onClickExtrato(){
    this.router.navigate(['extratos'])
  }

  onClickFuncionario(){
    this.router.navigate(['funcionarios'])
  }

  onPesquisar(){
    this.extratosService.getExtratos().subscribe((extratos:Extrato[])=>{
      this.extratos = extratos;
      console.log(this.extratos);
    })
  }

  displayedColumns: string[] = ['id', 'dataOperacao', 'tipoOperacao', 'valor'];
  


}



