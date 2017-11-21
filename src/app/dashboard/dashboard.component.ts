import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

	heroes : Hero[] = [];

	constructor(private heroService : HeroService) { }

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes() : void {
		//servicio llama a todos pero solo muestra los primeros 5 .. se puede optimizar
		this.heroService.getHeroes().subscribe(x => this.heroes = x.slice(1, 5));
	}

}
