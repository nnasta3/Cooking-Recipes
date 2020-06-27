/**
 * Recipe.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    
    name:{
      type:'string'
    },

    description:{
      type:'string'
    },

    steps: {
      type: 'json', columnType: 'array'
    },

    user_id:{
      type: 'number'
    },

    time:{
      type:'number'
    },

    image:{
      type:'string'
    }
    
  },

};

