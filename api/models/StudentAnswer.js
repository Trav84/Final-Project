/**
* StudentAnswer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	correct: { type: 'boolean', required: true },
  	answer: { type: 'string', required: true},
  	studentID: {
  		model: 'Student'
  	},
  	questionID: {
  		model: 'SuiteQuestions'
  	},
    suiteID: {
      model: "Suite"
    }
  }
};

