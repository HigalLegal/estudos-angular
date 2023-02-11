import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private route: ActivatedRoute, /*private redirecionamento: Router*/) {
    this.route.firstChild?.params.subscribe(param => console.log(param))
  }

  ngOnInit(): void {

//  setInterval(() => { this.redirecionamento.navigate(['']) }, 5000)

  }

}
