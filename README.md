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
├── assets/                        # Egne bilder, fonter og ikoner som brukes i komponenter
├── components/                    # Gjenbrukbare UI-komponenter
│   ├── Navbar.js                  # Navigasjonsmeny med lenker for brukere/admin
│   ├── VenueCard.js               # Kortvisning av enkelt Venue (navn, bilde, info)
│   └── BookingForm.js             # Skjema for å booke et opphold på et Venue
├── layouts/                       # Layout-komponenter for forskjellige sider
│   ├── MainLayout.js              # Layout for vanlig bruker (med navbar etc.)
│   └── AdminLayout.js             # Layout for admin-/venue-manager-sider
├── pages/                         # Applikasjonens ulike sider (views)
│   ├── Home.js                    # Forsiden med liste over venues
│   ├── VenueDetail.js             # Detaljside for valgt venue (med bookingskjema og kalender)
│   ├── Login.js                   # Innloggingsside
│   ├── Register.js                # Registrering for både brukere og venue-managers
│   ├── Profile.js                 # Brukerprofil (avatar, bookings osv.)
│   ├── CreateVenue.js             # Skjema for å legge til nytt venue
│   ├── EditVenue.js               # Redigere eksisterende venue (bare hvis manager)
│   └── AdminDashboard.js          # Adminside for å se egne venues og tilhørende bookings
├── services/                      # Håndtering av API-kall og autentisering
│   ├── api.js                     # Grunnleggende axios-oppsett og API-endepunkter
│   └── auth.js                    # Login, logout, token-lagring osv.
├── hooks/                         # Egendefinerte React hooks
│   ├── useAuth.js                 # Håndtering av login-status, userInfo osv.
│   └── useVenues.js               # Hook for å hente venues og venue-info
├── context/                       # Global state via Context API
│   └── AuthContext.js             # Gir appen tilgang til brukerdata, login, logout m.m.
├── utils/                         # Diverse hjelpefunksjoner
│   ├── formatDate.js              # Formattere datoer for visning
│   └── validateEmail.js           # Enkelt regex-sjekk for e-post
├── App.js                         # Hovedkomponent, inneholder router og layout
├── index.js                       # Entry point, renderer <App /> i DOM
└── routes.js                      # Definerer og organiserer alle ruter/sider i appen