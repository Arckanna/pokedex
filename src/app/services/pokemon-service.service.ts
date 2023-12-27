/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})*/
export interface Pokemon{
  id: number;
  name: string;
  sex: string;
}
export class PokemonServiceService {

  pokemons: Pokemon[] = [];
  deletedPokemonName?: string;

  addPokemon(pokemonName: string, sex:string){
    this.pokemons.push({      
      id:this.pokemons.length,
      name : pokemonName,
      sex : sex,
    });
  }

  deletePokemon(index:number){
    this.pokemons.splice(index,1);   

  }
  constructor() { }
}
