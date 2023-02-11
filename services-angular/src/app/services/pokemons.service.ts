import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment'
import { PokemonData } from '../models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private baseURL: string;
  private pokeData: PokemonData | any;

  constructor(private httpClient: HttpClient) {
    this.baseURL = environment.pokeApi;
  }

  pokemonName(name: string): Observable<PokemonData> {
    this.pokeData = this
                    .httpClient
                    .get<PokemonData>(`${this.baseURL}${name}`)

    return this.pokeData;
  }
}
