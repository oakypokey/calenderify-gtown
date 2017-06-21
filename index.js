let expresss = require('express')
let app = express()

app.set('port', (process.env.PORT || 5000));

app.post('/webhook', (req, res) => {
  res.send('Hello World')
})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

/*
app.get('/webhook', function(req, res) {
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === <VERIFY_TOKEN>) {
    console.log("Validating webhook");
    res.status(200).send(req.query['hub.challenge']);
  } else {
    console.error("Failed validation. Make sure the validation tokens match.");
    res.sendStatus(403);
  }
});
*/
