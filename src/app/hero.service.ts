import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  constructor() { }

  public getHeroes():Hero[] {
    return HEROES;
  }

}
