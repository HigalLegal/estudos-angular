import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  produtos: string[] = ["Sabão Líquido", "Água sanitária", "Sabão em pó", "Gel de piso"]
  menuType: string = "super adm"

  constructor() { }

  ngOnInit(): void {
  }

  adicionar(): void {
    this.produtos.push("Ednaldo Pereira")
  }

  exibir(index: number): void {
    alert(`Número: ${index}`)
  }

}
