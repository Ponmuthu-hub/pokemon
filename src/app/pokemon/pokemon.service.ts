import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { Sprite } from '../models/sprite';
import { Stat } from '../models/stats';
import { Type } from '../models/type';
import { SharedService } from '../shared.service';
@Injectable()
export class PokemonService {
pokemons:Pokemon[]=[];
pokemon:Pokemon=<Pokemon>{};
pokemonType:Type=<Type>{};
types:Type[]=[];
stat:Stat=<Stat>{};
stats:Stat[]=[];
sprit:Sprite=<Sprite>{};
  constructor(private sharedService:SharedService) { }

  getAllPokemons(pageSize:number,offSet:number){
    return this.sharedService.Get('pokemon?limit='+pageSize+'&offset='+offSet);
  }
  getPokemonData(name:string){
    return this.sharedService.Get('pokemon/'+name)
  }
  getPokemonTypes(){
    return this.sharedService.Get('type')
  }
  getPokemons(typeName:string){
    return this.sharedService.Get('type/'+typeName)
  }
}
