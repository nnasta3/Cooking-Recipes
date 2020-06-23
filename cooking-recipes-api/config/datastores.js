/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards `config/env/production.js`.
 *
 * For more information on configuring datastores, check out:
 * https://sailsjs.com/config/datastores
 */

module.exports.datastores = {

  default: {
    adapter: 'sails-mongo',
    url:'mongodb://CookingRecipe:CookingRecipePassword!@cluster0-shard-00-00-y6jf4.mongodb.net:27017,cluster0-shard-00-01-y6jf4.mongodb.net:27017,cluster0-shard-00-02-y6jf4.mongodb.net:27017/cooking-recipes',
    ssl: true,
    replicaSet: 'Cluster0-shard-0',
    authSource: 'admin'
  },


};
