# Verification Code Validator (Frontend)

**[Demo Link](https://verification-code-client.onrender.com/)**

## Overview
This project is a frontend application for validating verification codes. It allows users to enter a verification code and submit it for validation. The application communicates with a backend API to verify the code.

## Features
**Code Input**: Users can enter their verification code into an input field.<br>
**Validation**: The application validates the code by sending it to the backend API.<br>
**Feedback**: Users receive feedback on whether the code is valid or not.

## Technologies Used
**React**: The frontend is built using React for the user interface.<br>
**Axios**: Axios is used for making HTTP requests to the backend API.<br>
**CSS**: Custom CSS is used for styling the application.

## Getting Started
To get started with the project, follow these steps:

1. Clone the repository: git clone git@github.com:kkritii/Verification-Code-Client.git
2. Install dependencies: yarn
3. Start the development server: yarn start
4. Open your browser and navigate to http://localhost:3000


## Configuration
The frontend application requires the backend API URL to be configured. You can do this by creating a .env file in the root of the project and adding the following:

```
REACT_APP_API_URL = http://localhost:4000
```

## Usage
To use the application, follow these steps:

1. Enter your verification code into the input field.
2. Click the "Submit" button to validate the code.
3. The application will display whether the code is valid or not.

## Rule:

- The input field only accepts numeric characters.
- All input fields must be populated before submitting the form.
- The last input must not be 7.
- The received code must be 6 digits long.
