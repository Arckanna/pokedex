import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonItemComponent } from './Components/pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './Components/pokemon-list/pokemon-list.component';
import { HighlightBackgroundColorDirective } from './directives/highlight-background-color.directive';
import { ToastsContainer } from "./services/toast-service/toasts-container.component";
import { PokemonServiceService } from './services/pokemon-service/pokemon-service.service';
import { PokemonTopComponent } from './Components/pokemon-top/pokemon-top.component';
import { PokemonFormComponent } from './Components/pokemon-form/pokemon-form.component';


@NgModule({
    declarations: [
        AppComponent,
        PokemonItemComponent,
        PokemonListComponent,
        HighlightBackgroundColorDirective,
        PokemonTopComponent,
        PokemonFormComponent,
        
    ],
    providers: [PokemonServiceService],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        NgbModule,
        ToastsContainer
    ]
})
export class AppModule { }
