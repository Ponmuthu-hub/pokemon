import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PaginationComponent } from 'src/app/pagination/pagination.component';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-show-pokemons',
  templateUrl: './show-pokemons.component.html',
  styleUrls: ['./show-pokemons.component.css']
})
export class ShowPokemonsComponent implements OnInit {
  totalRecords: number = 0;
  page: number = this.paginationComponent.page;
  pageSize: number = 8;
  loading: any = false;
  pokeData: any[] = [];
  pokemonTypeName:any;
  constructor(public pokemonService: PokemonService, private paginationComponent: PaginationComponent) { }

  ngOnInit(): void {
    this.refreshPokemons();
    this.dropDownPokemonTypes();
  }
  refreshPokemons() {
    this.pokemonService.getPokemons(this.pageSize, (this.page - 1) * this.pageSize).subscribe((response: any) => {
      this.totalRecords = response.count;
      this.pokemonService.pokemons = [];
      response.results.forEach((result: any) => {
        this.pokemonService.getPokemonData(result.name).subscribe((uniqResponse: any) => {
          this.pokemonService.pokemon = <Pokemon>{
            name: uniqResponse.name,
            height: uniqResponse.height,
            types: [{ name: uniqResponse.types[0].type.name }],
            stats: [{ health: uniqResponse.stats[0].base_stat, attackPower: uniqResponse.stats[1].base_stat }],
            sprites: [{ frontImage: uniqResponse.sprites.front_default }]
          };
          this.pokemonService.pokemons.push(this.pokemonService.pokemon);
        })

      });
    });

  }
  dropDownPokemonTypes(){
    this.pokemonService.getPokemonTypes().subscribe((types:any)=>{
   this.pokemonService.types=types.results;
    });
  }
  getPokemon(){
    console.log("ttt")
  }
  goToPrevious() {
    this.page--;
    this.refreshPokemons();
  }
  goToNext() {
    this.page++;
    this.refreshPokemons();

  }

  goToPage(pageNumber: number) {
    this.page = pageNumber;
    this.refreshPokemons();
  }
}
