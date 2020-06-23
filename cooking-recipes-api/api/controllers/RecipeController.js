/**
 * RecipeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  getRecipe: async (req,res) => {
    console.log(req.params.name);
    if(req.params.name){
      let recipes = await Recipe.find({
        name:req.params.name,
        description:req.params.description,
        steps:req.params.steps,
        user_id:req.params.user_id
      });
      console.log(recipes);
      return res.send(recipes);
    }
  },

  getAllRecipes: async (req,res) => {
    let recipes = await Recipe.find();

    return res.send(recipes);
  }

};

