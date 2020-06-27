import { Component, OnInit} from '@angular/core';
import { Recipe } from '../../recipe';
import { Step } from '../../recipe';
import { Steps } from '../../recipe';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CreateRecipeService } from '../../services/create-recipe.service';

@Component({
  selector: 'app-create-recipe-view',
  templateUrl: './create-recipe-view.component.html',
  styleUrls: ['./create-recipe-view.component.css']
})
export class CreateRecipeViewComponent implements OnInit {

  recipeForm = new FormGroup({
    recipeTitle: new FormControl('',[Validators.required]),
    recipeDescription: new FormControl('',[Validators.required]),
    recipeImage: new FormControl('',[Validators.required]),
    time: new FormControl('',[Validators.required]),
    numberOfSteps: new FormControl('',[Validators.required])
  });

  stepForm = new FormGroup({
    stepTitle: new FormControl('',[Validators.required]),
    stepTime: new FormControl('',[Validators.required]),
    stepImage: new FormControl(''),
    stepVideo: new FormControl(''),
    stepDescription: new FormControl('',[Validators.required])
  });

  constructor(
    private CreateRecipeService: CreateRecipeService,
  ) { }

  stepIndex = 0;
  generateSteps:boolean;
  recipe: Recipe = {};
  steps: Steps = {};
  step: Step = {};


  ngOnInit(): void {
  }

  publish(){
    console.log("here");
    this.nextStep();
    this.CreateRecipeService.saveRecipe(this.recipe).subscribe(recipe => this.recipe);
  }

  setStepIndex(index: number) {
    this.stepIndex = index;
  }

  public hasErrorRecipe = (controlName: string, errorName: string) =>{
    return this.recipeForm.controls[controlName].hasError(errorName);
  }

  public hasErrorStep= (controlName: string, errorName: string) =>{
    return this.stepForm.controls[controlName].hasError(errorName);
  }

  nextStep() {
    if(this.stepForm.valid){
      console.log("step Is valid");
      this.recipe.steps[this.stepIndex-1].title = this.stepForm.value.stepTitle;
      this.recipe.steps[this.stepIndex-1].time = this.stepForm.value.stepTime;
      this.recipe.steps[this.stepIndex-1].stepInfo[0].imageUrl = this.stepForm.value.stepImage;
      this.recipe.steps[this.stepIndex-1].stepInfo[0].text = this.stepForm.value.stepDescription;

      //Slice the video url to just get the v= tag
      let videoString = this.stepForm.value.stepVideo;
      let vIndex = videoString.indexOf("=");
      let endIndex = 0;
      for(let i=vIndex;i<videoString.length  ;i++){
          if(videoString.charAt(i)==='&'){
            endIndex = i;
          }
          else{
            endIndex = videoString.length;
          }
      }
      let newString = videoString.substring(vIndex+1,endIndex);
      console.log(newString);
      this.recipe.steps[this.stepIndex-1].stepInfo[0].videoId = newString;

      this.stepIndex++;
    }
  }

  //Update step counter and display the number of steps the user asked for
  nextStepStart() {
    if(this.recipeForm.valid){
      this.recipe.name = this.recipeForm.value.recipeTitle;
      this.recipe.description = this.recipeForm.value.recipeDescription;
      this.recipe.time = this.recipeForm.value.time;
      this.recipe.image = this.recipeForm.value.recipeImage;
      this.recipe.steps = [{time:this.steps.time, title:this.steps.title, stepInfo:this.steps.stepInfo = [{imageUrl:this.step.imageUrl,text:this.step.text, videoId:this.step.videoId}]}];
      for(let i =1;i<this.recipeForm.value.numberOfSteps;i++){
        this.recipe.steps.push({time:this.steps.time, title:this.steps.title, stepInfo:this.steps.stepInfo = [{imageUrl:this.step.imageUrl,text:this.step.text, videoId:this.step.videoId}]});
      }
      if(this.generateSteps ===true){
        this.stepIndex++;
      }
      else{
        this.stepIndex++;
        this.generateSteps=true;
      }
    }
    
    
  }

  prevStep() {
    this.stepIndex--;
  }


}
