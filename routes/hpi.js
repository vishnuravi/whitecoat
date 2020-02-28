var express = require('express');

var app = express.Router();

app.post('/generate', function(req, res){

    var data = req.body;

    var hpi_template = `${data.name} is a ${data.age} year old ${data.gender} presenting with ${data.symptom}. It started around ${data.onset} Since then it has been getting ${data.progression}. Patient describes it as "${data.description}" and rates it as a ${data.number} on a scale of 1-10. Associated symptoms include "${data.associated}". It gets better with "${data.alleviating}" and gets worse with "${data.aggravating}".`

    return res.json({
        response: {
          text:
            hpi_template },
      });

});

module.exports = app;