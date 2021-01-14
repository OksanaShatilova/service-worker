const express = require('express');
const webpush = require('web-push');
const cors = require('cors');
const bodyParser = require('body-parser');

const PUBLIC_VAPID = 'BDLOINkRN-HCHfTLpROQ8TLIds3jibDIFC8ThyBD8HBSQs2GqbmbZWQpYOZfH14EAr3FNrlKPoPlzAnWyH8WYpI';
const PRIVATE_VAPID = '6P5X53eTUxB6VO8NMH7g6yJVebEYBuVm2Yhb0wBB3D0';

const app = express();

const fakeDatabase = [];

app.use(cors());
app.use(bodyParser.json());

webpush.setVapidDetails('mailto:you@domain.com', PUBLIC_VAPID, PRIVATE_VAPID);

app.post('/subscription', (req, res) => {
  const subscription = req.body;
  fakeDatabase.push(subscription);
});

app.post('/sendNotification', (req, res) => {
  const notificationPayload = {
    notification: {
      title: 'Valar Morghulis',
      body: 'I am No One',
      icon: 'assets/icons/icon-512x512.png'
    }
  };

  const promises = [];
  fakeDatabase.forEach(subscription => {
    promises.push(webpush.sendNotification(subscription, JSON.stringify(notificationPayload)));
  });
  Promise.all(promises).then(() => res.sendStatus(200)).catch(e => console.log(e));
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
})
