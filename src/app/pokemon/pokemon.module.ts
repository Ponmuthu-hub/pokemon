import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowPokemonsComponent } from './show-pokemons/show-pokemons.component';
import { PokemonService } from './pokemon.service';
import { PokemonRoutingModule } from './pokemon-routing.module';
import { PaginationModule } from '../pagination/pagination.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ShowPokemonsComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    PaginationModule,
    FormsModule      
 ],
  providers:[
    PokemonService
  ]
})
export class PokemonModule { }
