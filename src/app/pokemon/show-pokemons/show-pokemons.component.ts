import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
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
  pokemonNames:any[]=[];
  pokemonTypeName:any;
  pokemonName:any;
  records:boolean=true;
  constructor(public pokemonService: PokemonService, private paginationComponent: PaginationComponent,private localStorageService:LocalStorageService,private router:Router) { }

  ngOnInit(): void {
    this.refreshPokemons();
    this.dropDownPokemonTypes();
    this.getPokemonData();
  }
  refreshPokemons(){
    var pokemonTypeName=(<HTMLInputElement>document.getElementById("pokemonType")).value;
    if(pokemonTypeName==''){
this.getAllPokemons();
    }
    else{
    this.searchType();}
  }
  getAllPokemons() {
    this.pokemonService.getAllPokemons(this.pageSize, (this.page - 1) * this.pageSize).subscribe((response: any) => {
      this.totalRecords = response.count;
      this.pokemonNames=[];
      this.pokemonNames=response.results;
      this.getPokemonData();
    });
  }
  getPokemonData(){
    this.pokemonNames.forEach((result: any) => {
      this.pokemonService.pokemons = [];
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

  }
  dropDownPokemonTypes(){
    this.pokemonService.getPokemonTypes().subscribe((types:any)=>{
   this.pokemonService.types=types.results;
    });
  }
  
  searchType(){
    console.log((this.page-1)*this.pageSize-1,"",(this.pageSize*this.page));
    var pokemonTypeName=(<HTMLInputElement>document.getElementById("pokemonType")).value;
    if(pokemonTypeName!=''){
    this.pokemonService.getPokemons(pokemonTypeName).subscribe((response: any) => {
      var typeDetails=response;
      this.totalRecords=typeDetails.pokemon.length;
      this.pokemonNames=[];
      for(let i=(this.page-1)*this.pageSize;i<(this.pageSize*this.page);i++){
        console.log(typeDetails.pokemon[i].pokemon.name)
          this.pokemonNames.push(<any>{name:response.pokemon[i].pokemon.name})
      }
      this.getPokemonData();
    });
  }
  }
  searchPokemon(searchName:any){
    if(searchName!=''){
    this.pokemonNames=[];
this.pokemonNames.push(<any>{name:searchName})
this.totalRecords=1;
this.getPokemonData();
}
else{
  this.refreshPokemons();
}
  }
  pokemonDetails(name:string){
this.localStorageService.store('pokemonName',name)
this.router.navigateByUrl('Pokemons/Details')
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
