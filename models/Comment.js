const { Schema, model} = require('mongoose');

const commentSchema = new Schema(
    {
        comment: {type: String},
        pictures: {type: Schema.Types.ObjectId, ref:'Picture'},
        
    },
    {
        timestamps: true,
    },
);


module.exports = model('Comment', commentSchema);