import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Pokemon, PokemonServiceService } from '../../services/pokemon-service/pokemon-service.service';
import { ToastService } from '../../services/toast-service/toast-service';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
  providers: []

})
export class PokemonItemComponent implements OnInit {
  ngOnInit(): void {}
  toastService = inject(ToastService);
  @Input() pokemon: Pokemon | undefined;
  @Output() deletePokemon = new EventEmitter<string>();
  level = 10;
  sex = Math.random() > 0.5 ? 'male' : 'female';
  deletedPokemonName?: string;
  @Input() isTopPokemon?: boolean;

  constructor(private pokemonService: PokemonServiceService) {
    
  }
  onDeletePokemon() {
    if(!this.pokemon) return;
    this.pokemonService.deletePokemon(this.pokemon.id-1);
    this.deletedPokemonName = this.pokemon.name;
    const toastText = "Le Pokemon " + this.deletedPokemonName + " a été supprimé";
    this.toastService.show({ toastText, classname: 'bg-warning text-muted', delay: 3000 });
  }
 
}
