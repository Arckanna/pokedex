import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, inject } from '@angular/core';
import { Pokemon, PokemonServiceService } from '../../services/pokemon-service/pokemon-service.service';
import { ToastService } from '../../services/toast-service/toast-service';
import { ChangeDetectorRef } from '@angular/core';

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
  deletedPokemonName?: string;
  @Input() isTopPokemon?: boolean;
  @Input() pokemonIndex?: number;

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
