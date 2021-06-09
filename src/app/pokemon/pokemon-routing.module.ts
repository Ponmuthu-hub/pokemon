import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowPokemonsComponent } from './show-pokemons/show-pokemons.component';

const routes: Routes = [
    {path:"",component:ShowPokemonsComponent},
    {path:"Pokemons",component:ShowPokemonsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }