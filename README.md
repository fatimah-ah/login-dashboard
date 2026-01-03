# Login Dashboard

A modern React application built with Vite that provides user authentication and a protected dashboard interface. The app features a login page, multiple dashboard pages, and route protection for authenticated users.

## Features

- **User Authentication** - Login system with protected routes
- **Responsive Design** - Works seamlessly on desktop and mobile devices
- **Fast Development** - Built with Vite for instant HMR (Hot Module Replacement)
- **Component-Based Architecture** - Modular and reusable React components
- **Routing** - React Router for seamless navigation
- **Code Quality** - ESLint configured for code standards

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **React Router 7** - Client-side routing
- **CSS3** - Styling

## Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/fatimah-ah/login-dashboard.git
cd login-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

Or if you're using yarn:

```bash
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will start at `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

- **`npm run dev`** - Start the development server with hot module replacement
- **`npm run build`** - Build the application for production
- **`npm run preview`** - Preview the production build locally
- **`npm run lint`** - Run ESLint to check code quality

## Project Structure

```
src/
├── App.jsx                 # Main App component
├── App.css                 # Global styles
├── main.jsx                # Entry point
├── index.css               # Base styles
├── ProtectedRoute.jsx      # Route protection component
├── components/             # Reusable components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── NavBar.jsx
│   └── Content.jsx
└── pages/                  # Page components
    ├── Home.jsx
    ├── Login.jsx
    ├── About.jsx
    ├── Services.jsx
    ├── Contact.jsx
    └── DashboardLayout.jsx
```

## Usage

### Running the App

1. **Development Mode:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`

2. **Production Build:**
   ```bash
   npm run build
   npm run preview
   ```

### Default Routes

- `/` - Home page
- `/login` - Login page
- `/dashboard` - Protected dashboard (requires authentication)
- `/about` - About page
- `/services` - Services page
- `/contact` - Contact page

## Authentication

The app includes a `ProtectedRoute` component that restricts access to dashboard pages. Users must log in through the login page to access protected routes.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Building for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be generated in the `dist/` folder.

## Linting

Check your code for quality issues:

```bash
npm run lint
```

## Troubleshooting

### Port 5173 Already in Use

If port 5173 is already in use, Vite will automatically try the next available port (5174, 5175, etc.). Check the terminal output to see which port is being used.

### Module Not Found

If you get module not found errors:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Dependencies Issues

To update all dependencies to their latest versions:

```bash
npm update
```

## Contributing

Feel free to fork this repository and submit pull requests with improvements.

## License

This project is open source and available under the MIT License.

## Support

If you encounter any issues or have questions, please open an issue in the repository.

---

**Happy coding!**
