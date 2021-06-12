import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Move } from 'src/app/models/move';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  constructor(private localStorageService:LocalStorageService,public pokemonService:PokemonService,private router:Router) { }

  ngOnInit(): void {
    this.getPokemonDetails();
  }

  getPokemonDetails(){
    var name=this.localStorageService.retrieve('pokemonName')
    this.pokemonService.getPokemonData(name).subscribe((uniqResponse: any)=>{
      console.log()
      this.pokemonService.pokemon = <Pokemon>{
        name: uniqResponse.name,
        height: uniqResponse.height,
        types: [{ name: uniqResponse.types[0].type.name}],
        stats: [{ health: uniqResponse.stats[0].base_stat, attackPower: uniqResponse.stats[1].base_stat }],
        sprites: [{ frontImage: uniqResponse.sprites.front_default ,svgImage: uniqResponse.sprites.other.dream_world.front_default}],
        weight:uniqResponse.weight
      };
      this.pokemonService.pokemon.moves=[
        <Move>{name:uniqResponse.moves[0].move.name},
        <Move>{name:uniqResponse.moves[1].move.name},
        <Move>{name:uniqResponse.moves[2].move.name},
        <Move>{name:uniqResponse.moves[3].move.name},
        <Move>{name:uniqResponse.moves[4].move.name}]
        
    });
    
  }
  AllPokemons(){
this.router.navigateByUrl('Pokemons');
  }
 
  }

