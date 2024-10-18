# Simple Todo App

A simple and interactive To-Do application built using **React**. This project allows users to add, mark as completed, and delete tasks. It also provides a counter for completed and uncompleted tasks, making it a great beginner's project for learning the core concepts of React.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

This is a simple React To-Do application where you can add tasks, mark them as done, and delete them.



## Features

- Add new tasks with a simple text input.
- Mark tasks as completed by checking a checkbox.
- Delete tasks from the list.
- Counters showing the number of completed and uncompleted tasks.
- Responsive and user-friendly UI.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **CSS**: For styling the application.
- **UUID**: To generate unique IDs for tasks.

## Installation

Follow these steps to set up the project on your local machine:

1. Clone the repository:

   ```sh
   git clone https://github.com/DeFrag73/lab-4-react.git
   ```

2. Navigate to the project directory:

   ```sh
   cd simple-todo-app
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the app.

## Usage

- To **add a new task**, type it into the input field and click the "Submit" button.
- To **mark a task as completed**, click the checkbox next to the task. Completed tasks are styled with a line-through effect.
- To **delete a task**, click the "Delete" button next to the specific task.
- The **counters** will show how many tasks are completed or uncompleted.

## File Structure

```
simple-todo-app/
|-- public/
|   |-- index.html
|
|-- src/
|   |-- components/
|       |-- Header.js
|       |-- InputTodo.js
|       |-- TodoContainer.js
|       |-- TodoItem.js
|       |-- TodosList.js
|   |-- App.css
|   |-- index.js
|
|-- package.json
|-- README.md
```

- **components/**: Contains all the React components used in the project.
- **App.css**: Styles for the application.
- **index.js**: The entry point of the application.

## Contributing

Contributions are welcome! If you would like to make improvements to this project, feel free to fork the repository and submit a pull request.

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute this project as you wish.

## Contact

For any inquiries, please contact me via [your email address].

