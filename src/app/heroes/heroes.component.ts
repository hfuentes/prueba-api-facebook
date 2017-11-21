import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

	heroes: Hero[];

	constructor(private heroService: HeroService) {}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes() : void {
		this.heroService.getHeroes().subscribe(x => this.heroes = x);
	}

	add(name : string) : void {
		name = name.trim();
		if (!name) { return; } //hace nada
		this.heroService.addHero({ name } as Hero).subscribe(x => this.heroes.push(x));
	}

	delete(hero : Hero) : void {
		this.heroes = this.heroes.filter(x => x !== hero);
		this.heroService.deleteHero(hero).subscribe();
	}

}
