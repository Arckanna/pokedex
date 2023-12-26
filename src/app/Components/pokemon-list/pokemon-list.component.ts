import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  canClickButton = false;
  currentPokemonName = '';  
  pokemonAdded = false;
  pokemons: string[] = [];
  deletedPokemonName?: string;

  onAddButtonClick(){
    this.pokemonAdded = true;
    this.pokemons.push(this.currentPokemonName);
  }

  onPokemonChange(event:Event){
    console.log('change');
    const inputElement = event.target as HTMLInputElement;
    this.currentPokemonName = inputElement?.value.trim();
    if(this.currentPokemonName != ""){
      this.canClickButton = true;
    } else {
      this.canClickButton = false;
    }
  }

  onDeletePokemon(name:string, index: number){
    this.pokemons.splice(index,1);
    this.deletedPokemonName = name;
  }
}
