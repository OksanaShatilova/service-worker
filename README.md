# Angular Push Notifications

This application was made following the tutorial in https://malcoded.com/posts/angular-push-notifications

## Steps to run the application
- Clone the repo.

- Run `npm install` from within the cloned repo.

- Run `ng build --prod` to run the build setup, after doing which you will get a `dist` folder.

- Launch CLI web server by running the command `http-server dist/sw-project`.

- Launch the express server from another terminal window by running command `npm run serve`. This will launch the server in `http://localhost:3000`

- After running the above and opening up the front-end in the browser click on the `Allow` button in notification that pops up in the browser.

- In order to get the push notification in the browser, open up Insomnia or Postman and send a `POST` request to the address `http://localhost:3000/sendNotification`. This will show up the web notification.

### Note:

There is a need for VAPID keys (public and private keys) needed for push notifications. thhhis can be generated using a library called `web-push` which you can find in `https://github.com/web-push-libs/web-push`. You can find instructions on how to use the library for this application in the tutorial https://malcoded.com/posts/angular-push-notifications.
