import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe  } from '../recipe';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeListService {

  Recipes: Recipe[];
  private homeUrl = 'http://localhost:8081';

  constructor(
    public http: HttpClient,
  ) { }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.homeUrl)
    .pipe(
      tap(_ => console.log('fetched recipes')),
      catchError(this.handleError<Recipe[]>('getRecipes', []))
    );
  }

  getSearchedRecipes(id:string): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(this.homeUrl+'/search='+id)
    .pipe(
      tap(_ => console.log('fetched recipes')),
      catchError(this.handleError<Recipe[]>('getRecipe'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      //Log error
      console.error(error);  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
