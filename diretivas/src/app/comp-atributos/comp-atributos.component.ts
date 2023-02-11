import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estilo: string = "enable"
  corFundo: string = "#D98611"
  item: string = ""
  lista: string[] = []
  isEnable: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  mudarCor(): void {
    if(this.estilo == "enable") {
      this.estilo = "disable";
    } else {
      this.estilo = "enable"
    }
  }

  trocarCor(): void {
    if(this.corFundo == "#D98611") {
      this.corFundo = "#222388"
    } else {
      this.corFundo = "#D98611"
    }
  }

  adicionarItem(): void {
    this.lista.push(this.item)
  }

  habilitar(): void {
    if(this.isEnable == false) {
      this.isEnable = true
    } else {
      this.isEnable = false
    }
  }

}
