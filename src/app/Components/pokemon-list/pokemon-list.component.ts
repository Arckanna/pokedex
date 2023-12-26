import { Component, TemplateRef, inject } from '@angular/core';
import { ToastService } from '../toast-service/toast-service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent {
  toastService = inject(ToastService);
  canClickButton = false;
  currentPokemonName = '';  
  pokemonAdded = false;
  pokemons: string[] = [];
  deletedPokemonName?: string;

  onAddButtonClick(){
    this.pokemonAdded = true;
    this.pokemons.push(this.currentPokemonName);
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

  onDeletePokemon(name:string, index: number){
    this.pokemons.splice(index,1);
    this.deletedPokemonName = name;
    const toastText = "Le Pokemon " + this.deletedPokemonName + " a été supprimé";
    this.toastService.show({ toastText, classname: 'bg-warning text-muted', delay: 100000000000 });
  }
}
