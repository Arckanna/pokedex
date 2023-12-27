import { Component, HostListener, Input, Output } from '@angular/core';
import { Pokemon, PokemonServiceService } from '../../services/pokemon-service/pokemon-service.service';
import { PokemonItemComponent } from '../pokemon-item/pokemon-item.component';

@Component({
  selector: 'app-pokemon-top',
  templateUrl: './pokemon-top.component.html',
  styleUrl: './pokemon-top.component.scss'
})
export class PokemonTopComponent {
  ifClickPokemon = false;
  @Input() pokemonIndex?: number;
  @Output() clickPokemonIndex = -1;
  @Output() clickPokemonName = "UNKNOWN POKEMON NAME";
  pokemons = this.pokemonService.pokemons;

  /*@HostListener('click') onClick(_eventData: any){
    this.ifClickPokemon = true;
  this.clickPokemonIndex = this.pokemonIndex; 
  console.log(Event);
  console.log(this.pokemon); 
}*/
onClick(index: number, pokemonName: string) {
  this.ifClickPokemon = true;
  this.clickPokemonIndex = index;
  this.clickPokemonName = pokemonName;
  console.log(index);
}
  

  constructor(private pokemonService: PokemonServiceService){

  }
}
