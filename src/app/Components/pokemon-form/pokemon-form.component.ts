import { Component, Input } from '@angular/core';
import { PokemonServiceService } from '../../services/pokemon-service/pokemon-service.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.scss'
})
export class PokemonFormComponent {
  @Input() pokemonIndex: number = -1;
  @Input() pokemonName?: string;
  currentPokemonName = '';

  constructor(private pokemonService: PokemonServiceService){

  }
  
  onNameChange(event:Event){
    const inputElement = event.target as HTMLInputElement;
    this.pokemonService.updatePokemonName(this.pokemonIndex, inputElement?.value.trim());
  }

  onGenderChange(newGender: string){
    this.pokemonService.updatePokemonGender(this.pokemonIndex, newGender);
  }
}
