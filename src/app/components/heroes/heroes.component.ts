import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes:Heroe[]= [];

  constructor(private _heroesService: HeroesService,
              private router: Router) {
    //Esto se ejecuta mucho antes (
    console.log("constructor heroresComponent ")
  }

  ngOnInit() {
    console.log("ngOnInit heroresComponent ")
    //Esto se ejecuta cuando la pagina ya esta renderizada, despues del constructor
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
  }
}
