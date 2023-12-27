import { Component, Input, TemplateRef, inject, } from '@angular/core';
import { ToastService } from '../toast-service/toast-service';
import { Pokemon, PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  toastService = inject(ToastService);
  canClickButton = false;
  currentPokemonName = '';
  currentPokemonSex = '';  
  pokemonAdded = false;
  pokemons= this.pokemonService.pokemons;
  deletedPokemonName?: string;
  @Input() pokemon?: Pokemon;

  constructor(private pokemonService: PokemonServiceService ){

  }
  onAddButtonClick(){
    this.pokemonAdded = true;
    this.pokemonService.addPokemon(this.currentPokemonName, Math.random() > 0.5 ? 'male' : 'female');
    const toastText = "Le Pokemon " + this.currentPokemonName + " a été ajouté";
    this.toastService.show({ toastText, classname: 'bg-info text-muted', delay: 10000000000 });
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
  onDeletePokemon() {
    if(!this.pokemon) return;
    this.pokemonService.deletePokemon(this.pokemon.id-1);
    this.deletedPokemonName = this.pokemon.name;
    const toastText = "Le Pokemon " + this.deletedPokemonName + " a été supprimé";
    this.toastService.show({ toastText, classname: 'bg-warning text-muted', delay: 100000000000 });
    //this.deletePokemon.emit(this.name);
  }
  /*onDeletePokemon(name:string, index: number){
    this.pokemons.splice(index,1);
    this.deletedPokemonName = name;
    const toastText = "Le Pokemon " + this.deletedPokemonName + " a été supprimé";
    this.toastService.show({ toastText, classname: 'bg-warning text-muted', delay: 100000000000 });
  }*/
}
