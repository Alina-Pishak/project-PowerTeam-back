const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const diaryExerciseSchema = new Schema(
  {
   	exerciseId: {
			type: String,
			ref: 'exercise',
			required: true,
   	},
		owner: {
      	type: Schema.Types.ObjectId,
			required: true,
   	},
   	date: {
      type: String,
      format: 'dd/mm/YYYY',
   
   	},
   	time: {
      type: Number,
      min: 1,
		required: true,
   	},
   	burnedCalories: {
      type: Number,
      min: 1,
		required: true,
   	},
		bodyPart: {
		type: String,
	   required: true,
		},
		equipment: {
		type: String,
	   required: true,
		},
		name: {
		type: String,
		required: true,
		},
		target: {
		type: String,
		required: true,
		}
	
  },
  { versionKey: false }
);

diaryExerciseSchema.post('save', handleMongooseError);

const diaryExercise = model('diaryExercise', diaryExerciseSchema);

module.exports = { 
    diaryExercise,
  };
  

