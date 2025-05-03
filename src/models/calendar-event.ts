import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: true,
  },
  start: {
    type: Date,
    required: true,
  },
  end: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

eventSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();

  return {
    ...object,
    id: _id,
  };
});
export const Event = model("Event", eventSchema);
