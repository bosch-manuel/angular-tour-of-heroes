import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  private _hero: Hero = { id: 1, name: "Windstorm" };
  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  public get hero(): Hero {
    return this._hero;
  }

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
    console.log("hey");
  }

}
