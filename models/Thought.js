const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment's _id field
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // use a getter method to format the timestamp on query
            get: (createdAtVal) => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);



const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // use a getter method to format the timestamp on query
            get: (createdAtVal) => dateFormat(createdAtVal)
        },

        username: {
            type: String,
            required: true
        },
        // use ReplySchema to validate data for a reply
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

// get total count of reactions on retrieval
ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
}
);

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;
