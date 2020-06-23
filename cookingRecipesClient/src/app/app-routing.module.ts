import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesListViewComponent } from './pages/recipes-list-view/recipes-list-view.component';
import { RecipeViewComponent} from './pages/recipe-view/recipe-view.component';

const routes: Routes = [
  {
    path: '', component: RecipesListViewComponent
    
  },
  {
    path: 'recipe/:name', component: RecipeViewComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
