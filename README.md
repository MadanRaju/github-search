# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

NPM version tested on - 16.20.2

Application and technical choices - 

1) Used Ant Design as a component library. It is a widely used open source component library developed in React. Used the library to decrease development time and to maintain a fair look and feel of the application.
2) Redux is used as a state management library with thunk middleware. Although for this scale of application, there isn't a need to use external libraries for state management but this was done to demonstrate technical expertise.
3) Action and reducer creators are written to create these in an async way to maintain the standard structure of all moving parts.
4) Axios is used to make HTTP calls. Not needed for limited use cases like these but implemented to demonstrate technical skills.

To be improved - 

1) Responsive design is not upto the mark, couldn't verify the application for all resolutions and device types.
2) Test suite can be enhanced, couldn't do that completely in 3 hours.

Future ideas - 

1) Repository search can be implemented since Github API support exists.
2) We can drill down into the repository level to show more details about the creator, issues and other aspects.
3) Look and feel of the application can be enhanced even further.
4) Technical architecture can be improved further by creating template HOCs for all the external components to unify styling and for better code reusibility.
5) Usage of SASS to enhance CSS aspects.
