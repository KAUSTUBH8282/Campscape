# Campscape Project

## Application URL
[Live Application on Render](https://campscape-48vw.onrender.com/)

## Deployment Logs

![Render Logs](https://drive.google.com/uc?export=view&id=1z8sGZ6N42rFyzZ7ewvnwzRqc-tQqxxPZ)

This application is hosted on Render, and you can check out the logs above.


# CampScape

CampScape is a web application that allows users to explore, create, and review campgrounds. It is built using Node.js, Express.js, MongoDB, and other web development technologies. The app provides an interface for users to sign up, log in, and interact with campgrounds by adding new ones, leaving reviews, and editing or deleting their contributions.

## Features

- User authentication (signup/login)
- Full CRUD functionality for campgrounds and reviews
- Authorization to edit and delete campgrounds and reviews
- Responsive design using Bootstrap for a user-friendly interface
- Interactive maps to display campground locations (using MapTiler)
- File upload functionality for campground images (using Cloudinary)

## Technologies Used

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB (Mongoose ODM)
  - Passport.js (for user authentication)
- **Frontend:**
  - EJS templating engine
  - Bootstrap (for styling)
  - MapTiler (for maps)
  - Cloudinary (for image storage)
- **Other Libraries:**
  - Joi (for validation)
  - Express-session and connect-flash (for session management and flash messages)
  - Helmet (for security headers)
  - Sanitize-html (to sanitize user inputs)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/campscape.git
## Navigate into the project directory:

```bash
cd campscape

## Install the dependencies:
```bash
npm install

Set up a .env file in the root directory and include the following environment variables:
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
MAPTILER_KEY=your_maptiler_key
DB_URL=your_database_url (for MongoDB)
SECRET=your_session_secret

Run the application locally:
node app.js

Usage
Sign up or log in to create an account.
Browse campgrounds posted by other users.
Add a new campground with a name, price, description, and images.
Leave a review on any campground you visit.
Edit or delete your own campgrounds or reviews

File Structure
app.js: Entry point of the application
models/: Mongoose schemas for Campground and Review
routes/: Express routes for handling requests related to campgrounds, reviews, and user authentication
views/: EJS templates for rendering HTML pages
public/: Static assets (CSS, JS, images)
middlewares/: Custom middleware functions for authorization and error handling
seeds/: Script to populate the database with sample data (for development)

Future Improvements
Add pagination for campground listings
Implement a feature for users to bookmark favorite campgrounds
Improve the review system by adding upvotes/downvotes for helpful reviews
Add more filters and search options for campground discovery
