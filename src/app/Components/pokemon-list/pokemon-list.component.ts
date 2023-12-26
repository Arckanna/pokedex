import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  canClickButton = false;
  currentPokemonName = 'carapuce';
  notificationText = '';
  pokemonAdded = false;
  pokemons: string[] = ['carapuce','dracofeu','salameche','pikachu'];

  onAddButtonClick(){
    this.pokemonAdded = true;
    this.pokemons.push(this.currentPokemonName);
  }

  onPokemonChange(event:Event){
    console.log('change');
    const inputElement = event.target as HTMLInputElement;
    this.currentPokemonName = inputElement?.value;

  }
  constructor() {
    setTimeout(()=>{
      this.canClickButton = true;
    }, 2000);
  }
}
