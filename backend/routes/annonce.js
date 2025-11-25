const express = require("express");
const router = express.Router();
//const multer = require("multer");
const Annonce = require("../models/Annonce");

// ➤ ADD annonce (no controller)
router.post("/", async (req, res) => {
  try {
    const annonce = new Annonce(req.body);
    await annonce.save();
    res.json({ message: "Annonce ajoutée avec succès", annonce });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ➤ GET all annonces
router.get("/", async (req, res) => {
  const annonces = await Annonce.find();
  res.json(annonces);
});

// ➤ GET one annonce
router.get("/:id", async (req, res) => {
  const annonce = await Annonce.findById(req.params.id);
  res.json(annonce);
});


// config multer
//const storage = multer.diskStorage({
//  destination: function (req, file, cb) {
//    cb(null, "uploads/"); // dossier où les images seront stockées
///  },
 // filename: function (req, file, cb) {
 //   cb(null, Date.now() + "-" + file.originalname);
 // },
//});

//const upload = multer({ storage: storage });



module.exports = router;
