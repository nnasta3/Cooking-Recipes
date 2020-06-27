
export interface Recipe{
    name?:string;
    description?:string;
    steps?:Array<Steps>;
    user_id?:number;
    time?:number;
    image?:string;
}

export interface Steps{
  title?:string;
  time?:number;
  stepInfo?:Array<Step>;
}

export interface Step{
  text?:string;
  videoId?:string;
  imageUrl?:string;
  image?:string;
}