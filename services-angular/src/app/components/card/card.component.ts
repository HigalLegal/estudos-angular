import { PokemonData } from './../../models/pokemonData';
import { PokemonsService } from './../../services/pokemons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  pokemon: PokemonData;

  constructor(private pokeService: PokemonsService) {
    this.pokemon = {
      id: 0,
      name: "",
      sprites: {
        front_default: ""
      },
      types: []
    }
  }

  ngOnInit(): void {
    this.getPokemon("pikachu")
  }

  getPokemon(searchName: string): void {
    this.pokeService.pokemonName(searchName).subscribe(
      {
        next: (response) => {

          this.pokemon = {
            id: response.id,
            name: response.name,
            sprites: response.sprites,
            types: response.types
          }

          console.log(this.pokemon)
        },
        error: () => console.log("not found")
      }
    )
  }

}
