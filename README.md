# Tipper

A simple tipping calculator app that allows users to input their bill amount, choose a tip percentage, and specify the number of people to split the bill with. The app will then calculate the total tip amount and total amount per person, and display the results.

## Software Architecture

The software architecture of this project follows the single responsibility principle, where each component is responsible for a specific task and has a well-defined role in the overall functionality of the app.

The Calculator component acts as the "smart" component, managing the state and logic of the app. It imports and manages the rendering of the other "dumb" components - BillInput, SelectTip, NumberOfPeople, and Totals - which are responsible for rendering specific UI elements and handling user input.

This separation of concerns allows for a more modular and maintainable codebase, as each component is focused on a specific task and can be easily modified or swapped out without affecting the rest of the app.

The relationship between the "smart" and "dumb" components can be further enhanced by using props and callback functions to pass data and actions between the components. This allows the "smart" component to control the overall state and flow of the app, while the "dumb" components handle rendering and user input without any direct knowledge of the app's state.

Overall, the use of the single responsibility principle and the separation of concerns between "smart" and "dumb" components helps to create a more organized and scalable software architecture.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Node.js
* npm (installed with Node.js)
  
### Installing

1. Clone the repository:
`git clone https://github.com/your-username/tipper.git`

2. Navigate to the project directory:
`cd tipper`

3. Install the dependencies:
`npm install`

4. Start the development server:
`npm start`

The app will be running at [http://localhost:3000].

### Built With

* [React](https://reactjs.org/) - JavaScript library for building user interfaces
