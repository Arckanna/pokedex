import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss'],
})
export class PokemonItemComponent implements OnInit {
  ngOnInit(): void {}

  @Input() name?: string;
  @Output() deletePokemon = new EventEmitter<string>();
  level = 10;
  sex = Math.random() > 0.5 ? 'male' : 'female';

  constructor() {
    
  }
  onDeletePokemon() {
    this.deletePokemon.emit(this.name);
  }
  getName() {
    return this.name;
  }
}
