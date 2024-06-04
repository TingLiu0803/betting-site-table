# Swish Analytics Betting Market Table

Welcome to the Swish Analytics Betting Market Table, an interactive React application designed to display NBA betting market data efficiently. This project utilizes mock data to represent two API endpoints offering optimal betting lines and alternate line probabilities for NBA players.

## Live Demo

- **`URL`**: doranav-eric-liu.netlify.app

## Project Overview

This application is tailored to sports betting analysts and enthusiasts, providing a robust interface to explore and manipulate NBA betting market data. It features a dynamic table that integrates extensive filtering capabilities, search functionalities, and real-time interaction for toggling market suspension status.

## Code Structure

The project is structured to ensure clarity and maintainability, fostering an environment where components are both reusable and scalable:

- **`App.tsx`**: Serves as the root component, orchestrating the primary functionalities of the application.

  - **`MarketTableController.tsx`**: Manages state and interactions for the betting market table, including data fetching and state management.

    - **`MarketTable.tsx`**: Renders the data table, handling the display logic, and user interactions for filtering and toggling suspension status.
      - **`FilterBar.tsx`**: Allows users to filter markets based on position, stat type, and market status.
      - **`SearchBar.tsx`**: Facilitates searching within the table based on player names or team abbreviations.

## Key Features and Compliance with Requirements

- **Dynamic Data Table**: Displays rows for each market, including player stats, optimal lines, and range of lines available.
- **Advanced Filtering**: Users can filter data based on player position, stat type, and market status (active or suspended).
- **Search Functionality**: Includes a search bar for quick filtering based on player names or teams.
- **Customizable Appearance and Transitions**: The design focuses on cleanliness and visual appeal, incorporating smooth transition effects that guide the display and concealment of submenus, ensuring a fluid user experience.
- **Interactive Suspension Toggle**: Each market can be manually toggled between suspended or active, overriding automated suspension logic based on data criteria.
- **Responsive and Accessible Design**: Ensures that the application is usable on various devices and accessible to all users, including those with disabilities.

## Installation

To set up DoraNav locally, follow these steps:

### Clone the Repository

You can clone the repository using either HTTPS or SSH:

- **HTTPS**:
  git clone https://github.com/TingLiu0803/DoraNav.git
- **SSH**:
  git clone git@github.com:TingLiu0803/DoraNav.git

### Install Dependencies

Navigate to the project directory and install the required dependencies:

- **Install**:
  npm install

### Running the Project

- **Running Project**:
  npm start

This will launch the application in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it. The application will automatically reload if you make edits to the code.

### Technologies Used

- **React**:
Utilized for its efficient rendering and state management capabilities.
- **TypeScript**:
Enhances development experience with static type checking.
- **TailwindCSS**:
Chosen for its utility-first approach, enabling rapid UI development with consistent design.