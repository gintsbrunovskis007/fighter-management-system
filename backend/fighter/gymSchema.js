import mongoose from "mongoose";

const gymSchema = new mongoose.Schema(
  {
    gymName: {
      type: String,
      required: true,
      trim: true,
    },
    trainerName: {
      type: String,
      required: true,
      trim: true,
    },
    country: {
      type: String,
      enum: [
        "UNITED_STATES",
        "RUSSIA",
        "BRAZIL",
        "AUSTRALIA",
        "NEW_ZEALAND",
        "NIGERIA",
        "ENGLAND",
        "LATVIA",
        "CANADA",
        "NEUTRAL",
      ],
      required: true,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
    logoUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

gymSchema.virtual("fighters", {
  ref: "Fighter",
  localField: "_id",
  foreignField: "Gym",
});

const Gym = mongoose.model("Gym", gymSchema);

export default Gym;
