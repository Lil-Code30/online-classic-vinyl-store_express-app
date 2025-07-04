# Spiral Sounds

Online classic vinyl store.

## Features

*   Browse a collection of classic vinyl records.
*   View details for each product.
*   Simple and clean user interface.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/)
*   [npm](https://www.npmjs.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd "FullStack Express App"
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Create and seed the database:**
    Run the following commands to set up the SQLite database and populate it with initial data.
    ```sh
    node createTable.js
    node seedTable.js
    ```

## Usage

To start the application, run the following command:

```sh
npm start
```

This will start the Express server, and you can view the application by navigating to `http://localhost:3000` in your web browser.

For development, you can use the `watch` script to automatically restart the server when file changes are detected:

```sh
npm run watch
```

## Available Scripts

*   `npm start`: Starts the server.
*   `npm run watch`: Starts the server in development mode with file watching.

## Technologies Used

*   **Backend:** Node.js, Express.js
*   **Database:** SQLite
*   **Frontend:** HTML, CSS, JavaScript
