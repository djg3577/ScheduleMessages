const sendMessage = require("./functions/sendMessage");
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Hello World!');
});

//endpoint for sending daily message to phone number
app.post('/sendDailyMessage', (req, res) => {
  try {
    sendMessage.sendDailyMessage(req.body.message);
    res.send('Message Sent');
  } catch (error) {
    console.error(`Failed to send message: ${error.message}`)
  }
});


//then another endpoint for being able to send specific messages on a time schedule


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});