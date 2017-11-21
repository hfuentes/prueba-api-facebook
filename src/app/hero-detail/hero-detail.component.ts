import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroDetailComponent implements OnInit {
	
	@Input() hero: Hero;

  	constructor(
  		private router : ActivatedRoute,
  		private heroSerivice : HeroService,
  		private location : Location
	){}

  	ngOnInit(){
  		this.getHero();
  	}

  	getHero() : void {
  		const id = parseInt(this.router.snapshot.paramMap.get('id'));
  		this.heroSerivice.getHero(id).subscribe(x => this.hero = x);
  	}

  	goBack() : void {
  		this.location.back();
  	}

    save() : void {
      this.heroSerivice.updateHero(this.hero).subscribe(() => this.goBack());
    }

}
