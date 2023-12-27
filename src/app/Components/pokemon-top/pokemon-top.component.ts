import { Component } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-top',
  templateUrl: './pokemon-top.component.html',
  styleUrl: './pokemon-top.component.scss'
})
export class PokemonTopComponent {

  constructor(private pokemonService: PokemonServiceService){

  }
  pokemons=this.pokemonService.pokemons;
}
