import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class SendRecipeService {

  private recipeSource = new Subject<Recipe>();
  recipe$ = this.recipeSource.asObservable();
  constructor() { }

  sendRecipe(recipe:Recipe){
    this.recipeSource.next(recipe);
  }

}
