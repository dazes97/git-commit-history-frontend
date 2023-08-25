# GitHub Commit History Frontend

This is the frontend of an exciting application that allows you to explore the commit history of this frontend repository and the backend repository. With this app, you can select a specific repository and a particular branch like master or develop, and get a detailed view of the commits made in that repository and branch.

## Key Features

- **Repository Selection:** You can choose from a list of available repositories, including frontend and backend repositories, and explore their commit history.

- **Branch Selection:** Furthermore, you have the option to select the specific branch of a repository. This allows you to view commits made on a development branch or the main branch (such as `master`).

- **Detailed Commit View:** Once you select a repository and branch, the app displays a detailed view of the commits. Here you can see valuable information such as the commit author, commit date and time, and the associated commit message.

- **User-Friendly:** The simple and user-friendly interface makes it easy to navigate and obtain relevant commit information.

## Technologies Used

This frontend project has been developed using modern web development technologies, including:

- **React:** The JavaScript framework used to build the user interface.

- **Axios:** A library for making HTTP requests to the backend API that provides commit data.

- **Material-UI:** A UI component library to ensure an attractive design and an intuitive user experience.

- **React Router:** A router library to define routes

## How to Use the Application

1. Select a repository from the dropdown list of available repositories.

2. Choose the branch you wish to explore.

3. The application will display a list of commits made in that specific repository and branch.

4. Click on a commit to get more details, such as the author, date, and associated message.

5. Explore and enjoy the commit history!

## Installation Instructions

1. clone the repository
2. create a .env file, copy the variables in .env.example 
3. set values:
- VITE_DEFAULT_PORT=3000
- VITE_API_BASE_URL=http://localhost
- VITE_API_PORT=5000 || (the one choose in the backend port)
4. run "npm install"
5. run "npm run dev"
6. enjoy!

## Notes
Private keys and env files are going to be sent by email. For professional purposes I can't commit private keys

## Author
This project was crafted by dazes97. If you have any questions or suggestions, please don't hesitate to get in touch.