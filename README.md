# Movie Genre App

Welcome to **Movie Genre App**, a web application that allows users to explore movies by genre, search for movies by name, and view detailed information about each movie. This project was built using **ReactJS**, **Tailwind CSS**, and **TMDb API**.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Folder Structure](#folder-structure)
- [API Integration](#api-integration)
- [Building and Deployment](#building-and-deployment)
- [License](#license)

## Technologies Used

- **ReactJS** - A JavaScript library for building user interfaces.
- **Tailwind CSS** - A utility-first CSS framework for styling.
- **TMDb API** - Provides movie data such as movie lists, details, genres, etc.
- **React Router** - For navigation and routing between pages.

## Features

- **Home Page**: Displays popular movies in a responsive layout.
- **Movie List**: View a list of movies filtered by genre.
- **Movie Detail**: View detailed information about a selected movie, including poster, description, and trailer.
- **Search Functionality**: Search for movies by name.
- **Genre Filter**: Filter movies by genre using a dropdown menu.

## Getting Started

### Prerequisites

Before you begin, ensure that you have **Node.js** and **npm** installed on your machine. You can download them from [Node.js official website](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sung23092003/movie-genre-app.git
   cd movie-genre-app

2. Install the dependencies:
npm install

3. Create a .env file in the root directory and add your TMDb API key:
REACT_APP_TMDB_API_KEY=your_api_key_here

Running the Application
To run the app in development mode, use the following command:
 - npm start

Running Tests
If you want to run tests for the application, use the following command:
 - npm test

Building for Production
- npm run build

Ejecting the App
- npm run eject

Folder Structure
The project follows a clean and modular folder structure:
src/
├── assets/              # Images, fonts, etc.
├── components/          # Reusable components like Card, Dropdown, Navbar
│   ├── common/          # Common UI components
│   ├── layout/          # Layout components (Header, Footer)
├── pages/               # Main pages (MovieList, MovieDetail)
├── router/              # Router and routes
├── services/            # API calls using Axios
├── App.js               # Entry point of the application
└── index.js             # React DOM rendering

API Integration
The app integrates with the TMDb API to fetch movie data:

/discover/movie: Fetches a list of movies.

/genre/movie/list: Fetches movie genres.

/movie/{movie_id}: Fetches detailed information about a specific movie.

/search/movie: Allows searching for movies by name.

To use the API, make sure to replace your_api_key_here in the .env file with your actual TMDb API key.


Building and Deployment
1. Build the production version:
npm run build

2. Deploy the contents of the build/ folder to your web server or hosting service (e.g., Netlify, Vercel).

