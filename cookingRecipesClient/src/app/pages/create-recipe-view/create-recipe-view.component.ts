import { Component, OnInit} from '@angular/core';
import { Recipe } from '../../recipe';
import { Step } from '../../recipe';
import { Steps } from '../../recipe';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
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

  stepForms = new FormArray([]);

  constructor(
    private CreateRecipeService: CreateRecipeService,
  ) { }

  stepIndex = 0;
  generateSteps:boolean;
  recipe: Recipe = {};
  steps: Steps = {};
  step: Step = {};
  videoString:string;
  newString:string;

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

  nextStep() {
    if(this.stepForms.at(this.stepIndex-1).valid){
      console.log("step Is valid");
      this.recipe.steps[this.stepIndex-1].title = this.stepForms.at(this.stepIndex-1).value.stepTitle;
      this.recipe.steps[this.stepIndex-1].time = this.stepForms.at(this.stepIndex-1).value.stepTime;
      this.recipe.steps[this.stepIndex-1].stepInfo[0].imageUrl = this.stepForms.at(this.stepIndex-1).value.stepImage;
      this.recipe.steps[this.stepIndex-1].stepInfo[0].text = this.stepForms.at(this.stepIndex-1).value.stepDescription;
      console.log(this.stepForms.at(this.stepIndex-1));
      console.log(this.recipe);
      console.log(this.stepForms);
      //Slice the video url to just get the v= tag
      this.videoString = this.stepForms.at(this.stepIndex-1).value.stepVideo;
      console.log(this.stepForms.at(this.stepIndex-1).value.stepVideo);
      let vIndex = this.videoString.indexOf("=");
      let endIndex = 0;
      for(let i=vIndex;i<this.videoString.length  ;i++){
          if(this.videoString.charAt(i)==='&'){
            endIndex = i;
          }
          else{
            endIndex = this.videoString.length;
          }
      }
      this.newString = this.videoString.substring(vIndex+1,endIndex);
      this.recipe.steps[this.stepIndex-1].stepInfo[0].videoId = this.newString;
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
        let stepForm = new FormGroup({
          stepTitle: new FormControl('',[Validators.required]),
          stepTime: new FormControl('',[Validators.required]),
          stepImage: new FormControl(''),
          stepVideo: new FormControl(''),
          stepDescription: new FormControl('',[Validators.required])
        });
        this.stepForms.push(stepForm);
        console.log(this.stepForms);
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
