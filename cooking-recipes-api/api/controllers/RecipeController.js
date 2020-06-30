/**
 * RecipeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {

  createRecipe: async(req,res) => {
    console.log(req.body);
    await Recipe.create(req.body);
    return res.ok();
  },

  getRecipe: async (req,res) => {
    console.log(req.params);
    if(req.params.name){
      let recipes = await Recipe.find({
        name:req.params.name,
        description:req.params.description,
        steps:req.params.steps,
        id:req.params.id
      });
      console.log(recipes);
      return res.send(recipes);
    }
  },

  getAllRecipes: async (req,res) => {
    let recipes = await Recipe.find();

    return res.send(recipes);
  },

  getSearchedRecipes: async (req,res) => {
    let recipes = await Recipe.find({
      name:req.params.name,
    });
    return res.send(recipes);
  }

};

