# FoodQuest

FoodQuest is a React.js web application that allows users to search for recipes based on the name of the dish or ingredients using the Spoonacular API. The application provides detailed information about each recipe, including description, ingredients, instructions, image, and nutrition facts.

## Features

- Search for recipes by dish name or ingredients
- View detailed information about each recipe
  - Description
  - Ingredients
  - Instructions
  - Image
  - Nutrition facts
- Node.js proxy server to hide API key

## Installation

To run FoodQuest locally, follow these steps:

1. Clone this repository to your local machine:

2. Navigate to the project directory:

3. Install the dependencies:

4. Start the development server: node api.js || npm run start:backend for backend and npm run dev for frontend

5. Open your browser and navigate to `http://localhost:8000` to view the application.

## Configuration

To configure the application with your Spoonacular API key, follow these steps:

1. Create a `.env` file in the root directory of the project.

2. Add your Spoonacular API key to the `.env` file: API_KEY=test1234

## Usage

1. Enter the name of the dish or ingredients you want to search for in the search bar.

2. Click the "Search" button.

3. Browse the list of recipes returned by the search.

4. Click on a recipe to view its details, including description, ingredients, instructions, image, and nutrition facts.

## Credits

FoodQuest utilizes the [Spoonacular API](https://spoonacular.com/food-api) to retrieve recipe data.
