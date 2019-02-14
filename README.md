# Flashcards

Flashcards it's a mobile application which allows users to study a collection of flashcards build with react-native and redux. This app has been tested on an Android device.

## Instalation

Clone the repository to a folder of your choice, redirect to the cloned repository and execute the following command:

```javascript
npm install
```

After the installation of the libs and dependencies, start the project executing the command:

```javascript
npm start
```

## Test

All tests were made using react scrips tests , after executing the command run all tests available.

```javascript
npm test
```

## Architecture

The modules of this project were made based on the concepts of clean architecture, consisting of three layers, date, domain and presentation.

## Layers

### Data Access Layer (data):

The data layer is responsible for connecting the application to the outside world, all data that is accessed from the outside of the application or oblivion outside the application passes here. In this project all data is handled with React Native AssynStorage.

### Business Logic Layer(domain):

The domain layer is responsible for knowing the business rules, knowing how the graphical interface should respond to a certain user action. In this project this layer was constructed using redux for the synchronous logics and redux-saga for asynchronous.

### User interface(presentation):

The presentation layer is responsible for determining what should be presented to the user. In this project this layer was built using the react and react-native.

## License

MIT © 2018

## Build tool

This project was created using the [Create React Native App](https://github.com/react-community/create-react-native-app).
