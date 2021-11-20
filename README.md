# Lego Collection

#### _By Nathan Fletcher_

## Description

- Love legos like me? This app will help you track your lego parts and update your collection automatically just by entering the lego set number which you can find on the box.

## Technologies Used

- Javascript
- React
- Custom Hooks to save your collection in local storage
- Input validation via controlled inputs using local state
- Rebrickable API

## Setup

- Clone this repository to your local machine
- Follow the instructions at [Rebrickable](https://rebrickable.com/api/) to create an account and generate an API key.
- Add a .env file to the parent directory and add the following code to the file:
  ```
    REACT_APP_API_KEY=[Your api key here]
  ```
- Run `npm start` from the parent directory to start the app on your local machine.

## Known Issues

- HTTP error handling is not yet implemented.
- Please contact me if you find any bugs or have suggestions.

## Future Plans

- Add an ErrorBoundary component to handle HTTP errors.
- Improve styling.

## License

_[MIT](https://opensource.org/licenses/MIT)_

Copyright (c) 2021 Nathan Fletcher

## Contact Information

_Nathan Fletcher @ github.com/nathanfletch_
