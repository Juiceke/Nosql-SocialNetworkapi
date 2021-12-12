const { Schema, model, Types } = require("mongoose");

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  username: {
    type: String,
    required: true,
  },
  reactions: [ReactionSchema],
});

const ReactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
  }
);

ThoughtSchema.virtual("thoughtCount").get(function () {
  return this.reactions.length;
});
