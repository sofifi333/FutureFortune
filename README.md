# Future Fortune

Future Fortune is a simple React application that lets users generate fortune cookies, view their fortune, and save past fortunes to a history panel.

## Features

- Generate a fortune cookie
- Click the cookie to reveal a fortune
- Generate a new cookie after revealing a fortune
- Save fortunes to a history list
- View saved fortunes by clicking on them
- Toggle the history panel using a button in the header

## How It Works

1. The user clicks **Generate Cookie** to start.
2. An unbroken fortune cookie appears.
3. Clicking the cookie fetches a fortune from an external API.
4. Once revealed, the user can:
   - Save the fortune
   - Generate a new cookie
5. Saved fortunes appear in the history panel and can be expanded individually.

## Tech Stack

- React
- JavaScript
- CSS
- Fortune API (https://api.adviceslip.com)

## Project Structure

- `App.jsx`  
  Manages global state such as the current fortune, errors, and history visibility.

- `Home.jsx`  
  Handles the main user experience, cookie interactions, and fortune history logic.

- `Header.jsx`  
  Contains the history toggle button.

- `Footer.jsx`  
  Displays footer content and stays pinned to the bottom of the page.

## Getting Started

1. Clone the repository
2. Install dependencies
   ```bash
   npm install
   npm run dev
   ```
