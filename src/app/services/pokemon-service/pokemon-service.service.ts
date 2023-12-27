import { ApplicationRef } from "@angular/core";

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

  constructor() { }

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

  updatePokemonName(index: number, newName: string){
    this.pokemons[index - 1].name = newName;
  }

  updatePokemonGender(index: number, newGender: string){
    this.pokemons[index - 1].sex = newGender;
  }
}
