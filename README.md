## Frontegg exercise

This project is a full-stack web application with a frontend built using Vite and a backend with Node.js and MongoDB Atlas.

## Prerequisites

Before running this project locally, make sure you have the following installed:
* Node.js
* MongoDB Atlas account


## Installation Instructions

1. clone the repo
2. cd to the backend folder (myworkstatus-be) and 
     i.   run 'npm install'
     ii.  create a .env file in the root folder, and your MongoDB Atlas connection string. The format should be:
           MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority
     iii. The default port it 3000, if you want to change it you can add to the .env file: PORT=<port_number>
     iv.  run 'npm start'

2. cd to the frontend folder (myworkstatus-fe) and
     i.   run 'npm install'
     ii.  if you changed the default port in step (2.ii): change the port number in the BASE_URL string in ./services/admiApp.js to match it.
     iii.  run 'npm start'

4. Go to http://localhost:5173/ (this is the default port used by Vite) and explore!

Thanks,
Nofar
