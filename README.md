Coding exercise 

This repo is a very basic setup for a node full stack web application. It has been bootstrapped with create-react-app and material-ui for the client-side js library. A simple api server with express.js that reads a staic json file is also setup.

To start the app: 
1. `yarn` to install all dependencies
2. `yarn start-server` to start the api server at http://localhost:8080 
2. `yarn start` to start the react dev server and launch the app at http://localhost:3000

Instructions: 
Below a new feature is outlined. A minimal app has been step to help bootstrap development. You may choose to use these existing packages or add any frameworks that you wish to complete the test.

Fertilizer Product Test:
Build a single page app the displays a list of fertilizer products where a user might be able to see a list of products that they might want to buy. Sample data is located in /src/server/sample.json. 
Each row may be clicked, which will open up a product in a new model/dialog and display some information about the product. The dialog should have a button to order that product. Pressing the button should decrease the quantity. If there is no product left, the button should be disabled. 

References: 
create-react-app: https://github.com/facebook/create-react-app
Material-ui: https://github.com/mui-org/material-ui
Express: https://github.com/expressjs/express
Axios: https://github.com/axios/axios