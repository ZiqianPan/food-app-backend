# Get Started with running the back-end locally.

First run the following command
1. `npm install`
2. `touch .env`
3. inside the env file `PORT=8888`
4. `npm start`

With that you should see the back-end running locally

This back-end routes includes
- / (health check route)
- /items (displays all of the food items in the api)
-  /items/:id (displays a food item with a particular id)