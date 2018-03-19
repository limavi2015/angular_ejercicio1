import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService} from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent  {
  heroe:any={};
  casaComic:any={};

  constructor(private activatedRoute:ActivatedRoute,
              private _heroresServices: HeroesService) {

    this.activatedRoute.params.subscribe(params=>{
      // este 'id' se toma de los routes { path: 'heroe/:id', component: HeroeComponent },
      this.heroe=this._heroresServices.getHeroe(params['id']);
      this.casaComic=this._heroresServices.getCasaComic(this.heroe.casa);
    })
  }


}
