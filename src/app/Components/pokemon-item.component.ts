import { Component } from "@angular/core";

@Component({
    selector: 'app-pokemon-item',
    templateUrl: './pokemon-item.component.html',
    styleUrls:['./pokemon-item.component.scss'],
})
export class PokemonItemComponent {
 name = "bulbizarre";
 level = 10;
 sex = Math.random() > 0.5 ? 'male':'female';


 getName(){
    return this.name;
 }
}