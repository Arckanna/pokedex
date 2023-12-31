import { Component, Input, TemplateRef, inject, } from '@angular/core';
import { ToastService } from '../../services/toast-service/toast-service';
import { Pokemon, PokemonServiceService } from '../../services/pokemon-service/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  toastService = inject(ToastService);
  canClickButton = false;
  currentPokemonName = '';
  pokemons= this.pokemonService.pokemons;
  deletedPokemonName?: string;
  @Input() pokemon?: Pokemon;

  constructor(private pokemonService: PokemonServiceService ){

  }

  onAddButtonClick(){
    this.pokemonService.addPokemon(this.currentPokemonName, Math.random() > 0.5 ? 'male' : 'female');
    const toastText = "Le Pokemon " + this.currentPokemonName + " a été ajouté";
    this.toastService.show({ toastText, classname: 'bg-info text-muted', delay: 3000 });
  }

  onPokemonChange(event:Event){    
    const inputElement = event.target as HTMLInputElement;
    this.currentPokemonName = inputElement?.value.trim();
    if(this.currentPokemonName != ""){
      this.canClickButton = true;
    } else {
      this.canClickButton = false;
    }
  }
}
