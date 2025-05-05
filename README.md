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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)



# Mappestruktur
src/
├── assets/               // Custom images, icons, fonts, or static files used in src
├── components/           // Reusable UI components
│   ├── Navbar.js         // Navigation bar with links for users/admins, includes logout - Kontrollert
│   ├── VenueCard.js      // Displays venue information in a styled card - Kontrollert
│   ├── BookingForm.js    // Booking form with calendar, guest input and API call - Kontrollert
│   ├── VenueBookings.js  // Displays bookings for a specific venue (for venue managers) - Kontrollert
│   ├── PrivateRoute.js   // Protects routes only for logged-in users - ✅ NY
│   └── ManagerRoute.js   // Protects routes only for venue managers - ✅ NY
├── layouts/              // Layout components for different sections of the app
│   ├── MainLayout.js     // Layout wrapper with navbar for public-facing pages - Kontrollert
│   └── AdminLayout.js    // Layout for admin/venue manager dashboard pages - Kontrollert
├── pages/                // Main views/screens of the application
│   ├── Home.js           // Home page showing list of available venues - Kontrollert
│   ├── VenueDetail.js    // Page showing details of a selected venue with calendar/booking - Kontrollert
│   ├── Login.js          // Login screen with form and validation - Kontrollert
│   ├── Register.js       // Registration screen for customers and venue managers - Kontrollert
│   ├── Profile.js        // User profile page with avatar and upcoming bookings - Kontrollert
│   ├── CreateVenue.js    // Form to create a new venue (for managers only) - Kontrollert
│   ├── EditVenue.js      // Form to edit an existing venue - Kontrollert
│   └── AdminDashboard.js // Dashboard for managing own venues and related bookings - Kontrollert
├── services/             // API interaction and authentication services
│   ├── api.js            // Axios instance with base URL and automatic token injection - Kontrollert
│   ├── auth.js           // Functions for login, registration, and logout - Kontrollert
│   ├── venues.js         // CRUD functions for venue management - Kontrollert
│   ├── bookings.js       // Functions for creating and retrieving bookings - Kontrollert
│   └── profile.js        // Functions for retrieving/updating user data and avatar - Kontrollert
├── hooks/                // Custom React hooks
│   ├── useAuth.js        // Hook to access and manage authentication state - Kontrollert
│   └── useVenues.js      // Hook to fetch and filter venues - Kontrollert
├── context/              // Global state management via React Context
│   └── AuthContext.js    // Provides access to user data, login, logout across the app - Kontrollert
├── utils/                // Utility/helper functions
│   ├── formatDate.js     // Formats dates for display - Kontrollert
│   └── validateEmail.js  // Validates email addresses using regex - Kontrollert
├── App.js                // Root component containing layouts and routing - Oppdatert ✅
├── index.js              // Application entry point that renders <App /> to the DOM - Kontrollert
└── routes.js             // Central routing configuration using react-router-dom - Oppdatert ✅
