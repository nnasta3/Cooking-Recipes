import { Component, OnInit } from '@angular/core';
import { RecipeListService } from 'src/app/services/recipe-list.service';
import {Recipe} from '../../recipe';
import { FormControl, Validators } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import {Router }from '@angular/router';


@Component({
  selector: 'app-recipes-list-view',
  templateUrl: './recipes-list-view.component.html',
  styleUrls: ['./recipes-list-view.component.scss'],
})
export class RecipesListViewComponent implements OnInit {

  recipes: Recipe[];
  selectedRecipe: Recipe;
  form = new FormControl('');
  recipe: Recipe;

  constructor(
    private RecipeListService: RecipeListService,
    private RecipeService: RecipeService,
    private router: Router,
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
  }

  searchQuery(): void{
    
    if( this.form.value===""){
      return;
    }

    this.RecipeListService.getSearchedRecipes(this.form.value).subscribe(recipes => this.recipes = recipes);
    console.log(this.form.value);

  }

  refreshPage(){
    window.location.reload();
  }

}
