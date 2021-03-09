Coding Exercise 

This repo is a very basic setup for a node full stack web application. It has been bootstrapped with create-react-app and material-ui for the client-side js library. A simple api server with express.js that reads a static json file is also setup.

Fertilizer App: 
The application renders a list of 10 fertilizer products that a customer could order. On render the products list is loaded via an API call and render on the page. There is an "Order" button on each row that sends a request to the api and decreases the quantity of that product.

To start the app: 
1. `yarn` to install all dependencies
2. `yarn start-server` to start the api server at http://localhost:8080 
2. `yarn start` to start the react dev server and launch the app at http://localhost:3000

Instructions:
Below are 2 new features outlined. Please choose one to implement. 

1. Update product table after a successful api call to order endpoint. 
In the app each line item has an "Order" button. Onclick of the button, the api is called and the quantity is decreased. Update the UI table so that it updates with the new product quantity after a successful api call. 

2. Update the order endpoint with quantity limit
The update endpoint currently allows a user to decrease the quantity below 0. Add some code to the api that stops users from ordering more than the quantity. If the user tries to order and the quantity is 0 a message should be returned. 

References: 
- create-react-app: https://github.com/facebook/create-react-app
- Material-ui: https://github.com/mui-org/material-ui
- Express: https://github.com/expressjs/express
- Axios: https://github.com/axios/axios