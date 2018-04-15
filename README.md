# log-it
An application to log anything you want. Created to test progressive web apps.

Deployed to firebase: https://log-it-app.firebaseapp.com/ 

## Dependencies
Testing out [hyperHTML](https://github.com/WebReflection/hyperHTML) to create html elements dynamically. Check out the full [hyperHTML documentation](https://viperhtml.js.org/hyperhtml/documentation/).

## Run the project
  - clone the repo:
    - `git clone https://github.com/PabloCorso/log-it.git`
    - or download the .zip file
  - run it (in chrome):
    - currently using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension for Visual Studio Code to test the app.
  
## Deploy
Needs authentication to firebase (private).

To setup firebase use:
  - `npm install -g firebase-tools`
  - `firebase login`

To deploy use:
  - `firebase deploy` on the root folder.
