import { Component, OnInit } from '@angular/core';
import { RecipeListService } from 'src/app/services/recipe-list.service';
import {Recipe} from '../../recipe';
import { FormControl, Validators } from '@angular/forms';
//import { SendRecipeService } from '../../send-recipe.service';


@Component({
  selector: 'app-recipes-list-view',
  templateUrl: './recipes-list-view.component.html',
  styleUrls: ['./recipes-list-view.component.scss'],
})
export class RecipesListViewComponent implements OnInit {

  recipes: Recipe[];
  selectedRecipe: Recipe;
  form = new FormControl('');

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

  searchQuery(): void{
    
    if( this.form.value===""){
      return;
    }

    this.RecipeListService.getSearchedRecipes(this.form.value).subscribe(recipes => this.recipes = recipes);
    console.log(this.form.value);

  }

}
