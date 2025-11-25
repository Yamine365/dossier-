const mongoose = require("mongoose");

const annonceSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  prix: { type: Number, required: true },
  pieces: { type: Number, required: true },
  chambres: { type: Number, required: true },
  surface: { type: Number, required: true },
  adresse: { type: String, required: true },
  description: { type: String, required: true },
 // images: { type: [String], default: [] },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  //date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Annonce", annonceSchema);
