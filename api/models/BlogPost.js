/**
* BlogPost.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    title : { type: 'string', required: true },

    content : { type: 'text', required: true },

    author : { type: 'string', defaultsTo: 'Sam Stiles' },

    category : { type: 'string', required: true },

    slug : { type: 'string', required: true }

  },

  beforeValidation: function ( inputtedValues, next ) {

      // Silly SLUG generation... TODO: find better rexep :P
      inputtedValues.slug = inputtedValues.title
                              .replace(',','')
                              .replace('-','')
                              .replace(/\W/g,'-')
                              .replace('--','-')
                              .toLowerCase();
      next();
  }

};

