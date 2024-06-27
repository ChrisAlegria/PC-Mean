# Employee Management System

This project is a full-stack application for managing employees, developed using the MEAN stack (MongoDB, Express.js, Angular, Node.js).

## Description
The Employee Management System allows you to add, view, update, and delete employee records. The application features a simple and intuitive user interface built with Angular and a robust backend using Node.js, Express, and MongoDB.

## Installation and Usage

### Backend
1. Ensure you have Node.js and MongoDB installed on your system.
2. Clone this repository to your local machine.
3. Navigate to the `backend` directory.
4. Install the dependencies:  `bash npm install`

### FrontEnd
1. Navigate to the frontend directory.
2. Install the dependencies: `npm install`
3. Start the frontend server: `ng serve`
4. The frontend server will be running on http://localhost:4200.

## Technologies Used

- MongoDB: NoSQL database used to store employee data.
- Express.js: Web application framework for Node.js.
- Angular: Frontend framework for building the user interface.
- Node.js: JavaScript runtime environment for executing backend code.

## File Structure

### Backend
- `models/empleado.js`: Defines the schema for employee records.
- `routes/empleado.routes.js`: Contains the routes for CRUD operations on employees.
- `index.js`: Entry point for the backend application.

### Frontend
- `src/app/app.module.ts`: Main module of the Angular application.
- `src/app/services/empleado.service.ts`: Service for interacting with the backend API.
- `src/app/pages/agregar-empleado/agregar-empleado.component.{html,ts}`: Component for adding a new employee.
- `src/app/pages/editar-empleado/editar-empleado.component.{html,ts}`: Component for editing an existing employee.
- `src/app/pages/listar-empleados/listar-empleados.component.{html,ts}`: Component for listing all employees.

## Help

If you need help with Angular and Node development, here are some useful commands and resources:

### Common Commands

- **To create a new Angular component:**: `ng generate component component-name`
- **To create a new service in Angular:**: `ng generate service service-name`
- **To run the Angular application:**: `ng serve`

### Useful Resources

- [Angular CLI Overview and Command Reference](https://angular.io/cli)

## Additional Resources

If you have problems, here are some resources to help you get started:

- Lab: Write your first Flutter app
- Cookbook: Useful Flutter samples
  
For help getting started with Flutter development, view the online documentation, which offers tutorials, samples, guidance on mobile development, and a full API reference.

## Deployment

You can deploy this application on a server that supports Node.js and Angular. Simply compile the Angular project and run the Node.js server in a production environment.

## Inspiration and Design

This project draws inspiration from various sources; however, I do not claim ownership of the design elements used. This project is purely for interactive purposes.

## Development

This project was developed by `©ChrisAlegria`. All rights reserved. Unauthorized reproduction or distribution of this project, or any portion of it, is prohibited.
