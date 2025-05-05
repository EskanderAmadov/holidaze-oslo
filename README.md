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
│   ├── Navbar.js         // Navigation bar with links for users/admins, includes logout - ✅
│   ├── VenueCard.js      // Displays venue information in a styled card - ✅
│   ├── BookingForm.js    // Booking form with calendar, guest input and API call - ✅
│   ├── VenueBookings.js  // Displays bookings for a specific venue (for venue managers) - ✅
│   └── ProtectedRoute.js // Protects routes based on login and role - ✅ (NY)
├── layouts/              // Layout components for different sections of the app
│   ├── MainLayout.js     // Layout wrapper with navbar for public-facing pages - ✅
│   └── AdminLayout.js    // Layout for admin/venue manager dashboard pages - ✅
├── pages/                // Main views/screens of the application
│   ├── Home.js           // Home page showing list of available venues - ✅
│   ├── VenueDetail.js    // Venue details page with carousel and booking - ✅
│   ├── Login.js          // Login screen with form and validation - ✅
│   ├── Register.js       // Registration screen for customers and venue managers - ✅
│   ├── Profile.js        // User profile page with avatar and bookings - ✅
│   ├── CreateVenue.js    // Form to create a new venue (venue managers only) - ✅
│   ├── EditVenue.js      // Form to edit a venue - ✅
│   └── AdminDashboard.js // Dashboard for venue managers with bookings and delete - ✅
├── services/             // API and data handling
│   ├── api.js            // Axios instance - ✅
│   ├── auth.js           // Auth functions (login, register, logout) - ✅
│   ├── venues.js         // CRUD for venues - ✅
│   ├── bookings.js       // Booking functions - ✅
│   └── profile.js        // Profile & avatar updates - ✅
├── hooks/                // Custom React hooks
│   ├── useAuth.js        // Hook for auth context - ✅
│   └── useVenues.js      // Hook to fetch/filter venues - ✅
├── context/              // Global state/context
│   └── AuthContext.js    // Auth provider and context - ✅
├── utils/                // Utility/helper functions
│   ├── formatDate.js     // Date formatting - ✅
│   └── validateEmail.js  // Email validation - ✅
├── App.js                // App wrapper with routes and context - ✅
├── index.js              // App entry point - ✅
└── routes.js             // Central route config using ProtectedRoute - ✅