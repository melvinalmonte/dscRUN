# Rutgers Newark Student Developer Club (SDC) Club Finder.

This is a proof of concept (POC) ReactJS application that leverages services such as Firebase for authentication and future integration of its database offerings
to create an application that can create student groups, search through existing groups, and groups availability. 

## Getting Started

To get started, clone this repository in your laptop and pc and have the requirements listed below. 

### Prerequisites

What is needed to run the project: 
```
- node
- npm
- Firebase Account
```

### Installing

To install the dependencies needed to run the application, using your command line or powershell/cmd 
navigate to the /frontend directory and run the following command.  

```
npm install
```

Once all dependencies are installed and your go to ```src/firebase/config.js``` file and add your firebase credentials to the config object : 
```
const config = {
  apiKey: "XXXXxxxx",
  authDomain: "xxxxXXXX.firebaseapp.com",
  databaseURL: "https://xxxXXXX.firebaseio.com",
  projectId: "xxxxXXXX"
};
```

You'd only really need the first three for this demo but the remaining will be needed as the project grows.



## Running the App

Now that we have all our dependencies installed and credentials set, we can start the app:

```
npm start
```

This should be our output:
```
Compiled successfully!

You can now view frontend in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://xxx.xxx.xx.x:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

If it's not open yet, got to ```http://localhost:3000/``` to interact with the application. 

## Built With

* [React](https://reactjs.org/) - Javascript Library
* [Firebase](https://firebase.google.com/) - App Platform

