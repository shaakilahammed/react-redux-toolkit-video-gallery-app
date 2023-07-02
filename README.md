# Video Gallery App

This is a video gallery application built using React, Redux Toolkit, and the Node API. It allows users to search for videos, view video details, and add videos to their favorites list.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install and run this project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/shaakilahammed/react-redux-toolkit-video-gallery-app.git`
2. Navigate to the project directory: `cd react-redux-toolkit-video-gallery-app`
3. Install the frontend dependencies: `npm install`
4. Start the frontend development server: `npm run dev`
5. Open your browser and visit `http://localhost:3000` to see the frontend application running.
6. Open a new terminal and navigate to the server directory: `cd server`
7. Install the backend dependencies: `npm install`
8. Start the backend server: `npm start`
9. The backend server will run on `http://localhost:5000` and provide the API endpoints for the application.

## Usage

Once the application and the backend server are running, you can perform the following actions:

- Search for videos by entering keywords in the search bar.
- Click on a video from the search results to view its details, including the title, description, and channel information.
- Add a video to your favorites list by clicking the "Add to Favorites" button on the video details page.
- View your favorite videos by clicking on the "Favorites" link in the navigation bar.
- Remove a video from your favorites list by clicking the "Remove from Favorites" button on the favorites page.

## Features

- Search for videos using the YouTube Data API.
- Display video search results with thumbnails and basic information.
- View video details, including the title, description, and channel information.
- Add videos to the favorites list.
- Remove videos from the favorites list.
- Persist the favorites list using Redux Toolkit's `createSlice` and `createAsyncThunk` functions.
- Backend server using JSON Server for providing API endpoints.
- Responsive design for optimal viewing on various devices.

## Technologies

The main technologies used in this project are:

- React: A JavaScript library for building user interfaces.
- Redux Toolkit: A library for efficient Redux development, including simplified state management and asynchronous actions.
- Axios: A promise-based HTTP client for making API requests.
- JSON Server: A simple and lightweight server for creating a RESTful API using a JSON file as the data source.
- Bootstrap: A CSS framework for building responsive and mobile-first websites.
- HTML: The standard markup language for creating web pages.
- CSS: The style sheet language used for describing the presentation of a document.

## Contributing

Contributions to this project are welcome. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request.

Please ensure that your contributions adhere to the project's coding conventions and standards.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify this code for your own purposes.
