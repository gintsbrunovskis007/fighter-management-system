import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema(
  {
    organizationName: {
      type: String,
      required: true,
      trim: true,
    },
    ownerName: {
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

organizationSchema.virtual("fighters", {
  ref: "Fighter",
  localField: "_id",
  foreignField: "Organization",
});

const Organization = mongoose.model("Organization", organizationSchema);

export default Organization;
