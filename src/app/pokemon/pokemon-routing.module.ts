import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ShowPokemonsComponent } from './show-pokemons/show-pokemons.component';

const routes: Routes = [
    {path:"",component:ShowPokemonsComponent},
    {path:"Pokemons",component:ShowPokemonsComponent},
    { path:"Pokemons/Details",component:DetailPokemonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }