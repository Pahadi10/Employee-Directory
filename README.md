# Employee Directory

This is a simple React project that displays employee information in card format, with features to search employees, view detailed employee information in a popup, and block/unblock employees.

## Features

- Displays a list of employees in a card layout.
- Search employees by name using a search bar.
- View detailed employee information in a modal popup.
- Block and unblock employees with options to list blocked employees and unblock them.
- Responsive and stylish UI.

## Project Structure

.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── BlockedUsersModal.css
│   │   ├── BlockedUsersModal.js
│   │   ├── EmployeeCard.css
│   │   ├── EmployeeCard.js
│   │   ├── EmployeeDetailsModal.css
│   │   ├── EmployeeDetailsModal.jss
│   │   ├── EmployeeList.js
│   │   ├── SearchBar.js
│   │   
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md


## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: You need Node.js installed to run the project. You can download it from [here](https://nodejs.org/).
- **npm**: npm comes with Node.js, so it should be installed along with it.

## Installation

Follow these steps to initialize the project:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Pahadi10/Employee-Directory.git
    cd employee-directory
    ```

2. **Install dependencies**:

    To install the required dependencies, run the following command inside the project folder:
    ```bash
    npm install
    ```

3. **Start the development server**:

    After the dependencies are installed, start the React development server with:
    ```bash
    npm start
    ```

    This will open the project in your default browser at `http://localhost:3000/`.

## Available Scripts

In the project directory, you can run:

- **`npm start`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm test`**: Runs the test suite (if applicable).
- **`npm run eject`**: Removes the single build dependency from the project (not reversible).

## Usage

Once the project is up and running, you can use the following features:

1. **Search Employees**: Use the search bar to find employees by name.
2. **View Details**: Click the "Details" button on an employee card to open a modal with detailed information about the employee.
3. **Block Employees**: Click the "Block" button to block an employee, removing them from the main list.
4. **View Blocked Users**: Click the "Blocked Users" button next to the search bar to view and unblock blocked employees.

## Technologies Used

- **React.js**: Front-end framework.
- **CSS**: Styling for components.
- **JavaScript (ES6+)**: Used to build dynamic functionality.
- **HTML5**: Base markup for the application.

## Styling

All components are styled using separate `.css` files for easy customization:

- **EmployeeCard.css**: Styles for employee cards.
- **EmployeeDetailsModal.css**: Styles for the employee details modal.
- **BlockedUsersModal.css**: Styles for the blocked users modal.

## Future Enhancements

Possible improvements for future development:

- Add a backend to store employee data.
- Add the ability to edit employee information.
- Implement authentication for different users (admin, employee).
- Add pagination or infinite scroll for large employee lists.

## Contributing

If you want to contribute to this project, feel free to submit a pull request or report issues.

## License

This project is open-source and available under the [MIT License](LICENSE).
