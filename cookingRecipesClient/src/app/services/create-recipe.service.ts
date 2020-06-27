import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe  } from '../recipe';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreateRecipeService {
  private homeUrl = 'http://localhost:8081';

  constructor(
    public http: HttpClient,
  ) { }

  saveRecipe(payload:Recipe): Observable<Recipe>{
    console.log("Payload is");
    console.log(payload);
    return this.http.post<Recipe>(this.homeUrl+'/createRecipe',payload)
    .pipe(
      catchError(this.handleError<Recipe>('saveRecipe'))
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
