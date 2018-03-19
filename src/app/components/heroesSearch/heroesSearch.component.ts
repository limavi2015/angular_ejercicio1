import { Component, OnInit } from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroesSearch',
  templateUrl: './heroesSearch.component.html'
})
export class HeroesSearchComponent implements OnInit {

  heroesSearch:Heroe[]= [];
  termino:string ="";

  constructor(private _heroesService: HeroesService,
              private activatedRoute:ActivatedRoute,
              private router: Router) {
      this.activatedRoute.params.subscribe(params=>{
        this.termino = params['termino']
            console.log("en el init llego " + this.termino)
      })
  }

  ngOnInit() {
    this.heroesSearch = this._heroesService.searchHeroes(this.termino);
    
  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx])
  }
}
