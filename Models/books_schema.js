const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },

    imagelink: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    classification: {
      type: String,
    },

    language: {
      type: String,
      required: true,
    },

    genre: {
      type: String,
    },
  },
  { collection: "books" }
);

module.exports = mongoose.model("books", bookSchema);
