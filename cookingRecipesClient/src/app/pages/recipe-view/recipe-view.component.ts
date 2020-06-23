import { Component, OnInit, ViewChild, Input  } from '@angular/core';
import {Recipe, Step, Steps} from '../../recipe';
import { RecipeListService } from 'src/app/recipe-list.service';
import { Router } from '@angular/router';
import { MAT_STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.scss'],
  providers:[{ 
    provide:MAT_STEPPER_GLOBAL_OPTIONS, useValue: { displayDefaultIndicatorType: false }
  }]
})
export class RecipeViewComponent implements OnInit {
  @ViewChild('player') player: any;
  videoId: string;

  @Input()
  set id(id: string) {
    this.videoId = id;
  }

  recipe: Recipe;
  steps: Steps[];
  step: Step[];

  constructor(
    private RecipeListService: RecipeListService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getRecipe();
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  getRecipe(){
    this.RecipeListService.getRecipe(this.router.url).subscribe(recipe => this.recipe = recipe[0]);
  }

}
