import { Component, OnInit } from '@angular/core';
import { RecipeListService } from 'src/app/recipe-list.service';
import {Recipe} from '../../recipe';
import { FormControl } from '@angular/forms';
//import { SendRecipeService } from '../../send-recipe.service';


@Component({
  selector: 'app-recipes-list-view',
  templateUrl: './recipes-list-view.component.html',
  styleUrls: ['./recipes-list-view.component.scss']
})
export class RecipesListViewComponent implements OnInit {

  recipes: Recipe[];
  selectedRecipe: Recipe;
  search = new FormControl('');
  constructor(
    private RecipeListService: RecipeListService,
    //private SendRecipeServive: SendRecipeService
  ) {
      
   }

  ngOnInit(): void {
    this.getRecipes();
    
  }

  getRecipes(): void{
    this.RecipeListService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

 
  onSelect(recipe: Recipe): void{
    this.selectedRecipe = recipe;
    console.log(this.selectedRecipe);
    //this.SendRecipeServive.sendRecipe(recipe);
  }

  searchQuery(name:string): void{
    this.RecipeListService.getRecipe(name).subscribe(recipes => this.recipes = recipes);
    if(this.recipes.length ==0 ){
      this.recipes=[];
    }
    console.log(name);
  }

}
