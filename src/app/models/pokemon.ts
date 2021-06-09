import { Sprite } from "./sprite";
import { Stat } from "./stats";
import { Type } from "./type";

export class Pokemon {
    pokemonId:number=0;
    name:string='';
    height:number=0;
    types:Type[]=[];
    stats:Stat[]=[];
    sprites:Sprite[]=[];
}
