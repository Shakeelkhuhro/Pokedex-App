# Pokedex App

This is a professional-grade Pokedex application built with React. It allows users to browse and view information about different Pokemon. The app leverages various concepts and libraries to provide a smooth and engaging user experience.

## Features

- **Homepage**: The homepage displays a list of Pokemon, showcasing their images, names, and IDs. The list is paginated for easy navigation.
- **Pokemon Details**: Clicking on a Pokemon in the list takes the user to a dedicated page that provides detailed information about the selected Pokemon. The details include the Pokemon's image, name, ID, types, and abilities.
- **Loading Spinner**: While fetching data from the API, a loading spinner is displayed to provide feedback to the user and ensure a seamless experience.

## Concepts and Libraries Used

The Pokedex app incorporates several key concepts and libraries in its implementation:

- **React**: The app is built using React, a popular JavaScript library for building user interfaces. React's component-based architecture and virtual DOM enable efficient rendering and seamless updates.
- **React Router**: React Router is used for handling navigation and routing within the app. It allows for easy navigation between different pages and ensures a smooth user experience.
- **React Bootstrap**: React Bootstrap provides pre-styled components and a responsive grid system, helping to create a visually appealing and consistent UI design.
- **Axios**: Axios is used for making HTTP requests to the PokeAPI. It provides a simple and intuitive API for handling asynchronous requests and retrieving Pokemon data.

## Installation

To run the Pokedex app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Shakeelkhuhro/pokedex-app.git`
2. Navigate to the project directory: `cd pokedex-app`
3. Install the dependencies: `npm install`

## Usage

1. Start the development server: `npm start`
2. Open your web browser and visit: `http://localhost:3000`
3. Browse through the list of Pokemon on the homepage.
4. Click on a Pokemon to view its details on a separate page.

## Folder Structure

The folder structure of the Pokedex app is organized as follows:

src/ <br>
|- components/ <br>
| |- Header.js <br>
| |- Loader.js <br>
| |- Pokemon.js <br>
| <br>
|- pages/ <br>
| |- Homepage.js <br>
| |- PokemonPage.js <br>
| <br>
|- App.js <br>
|- index.js <br>
|- App.css <br>
|- index.css <br>
|- ... <br>


The `components` folder contains reusable components used throughout the app, such as the Header, Loader, and Pokemon components. The `pages` folder contains the main pages of the app, including the Homepage and PokemonPage.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
