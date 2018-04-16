# log-it
An application to log anything you want. Created to test progressive web apps.

Live at https://log-it-app.firebaseapp.com/ 

## Run the project
  - clone the repo: `git clone https://github.com/PabloCorso/log-it.git`
  - cd into the project: `cd log-it`
  - `npm install`
  - `npm start`

## Dependencies
Testing out [**hyperHTML**](https://github.com/WebReflection/hyperHTML) to create html elements dynamically. Check out the full [hyperHTML documentation](https://viperhtml.js.org/hyperhtml/documentation/).

Added **webpack** and **babel** dev dependencies to compile the code with es6 features into a browser friendly bundle file. The entry file for webpack is `src/app.js` which is transformed and inserted at the `public` folder as app.bundle.js, where all the static files live.

Finally, only the `public` folder is deployed using **firebase** (see [Deploy](#deploy)).

## Deploy
Needs authentication to firebase (private).

To setup firebase use:
  - `npm install -g firebase-tools`
  - `firebase login`

To deploy use:
  - `firebase deploy` on the root folder.
