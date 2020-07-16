const express = require("express");
const hpiGenerator = require("hpi-generator");

var app = express.Router();

app.post("/", function(req, res) {
  const data = req.body;

  // patient information
  const patient = {
    name: data.name,
    age: data.age,
    gender: data.gender,
  }

  // symptom data
  const symptom = {
    name: data.symptom,
    description: data.description,
    onset: data.onset,
    progression: data.progression,
    severity: data.severity,
    associated: data.associated,
    alleviating: data.alleviating,
    aggravating: data.aggravating
  }

  // generate HPI
  const hpi = hpiGenerator.createHPI(patient, symptom); 

  return res.json({
    response: {
      text: hpi
    }
  });
});

module.exports = app;
