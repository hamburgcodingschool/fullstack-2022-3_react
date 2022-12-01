# Project: Travel Blog in React

This project is part of the curriculum of the Full-Stack Web Development program at [Hamburg Coding School](https://hamburgcodingschool.com/).

## Goal

Goal is to transfer the main idea from your last project "The Travel Blog", made with pure Javascript, HTML and CSS into a **React App**.

While working on the project remind yourself of *"thinking of components as building blocks"*, – one of the many great parts of modern frontend web frameworks.

## Features

### 1. Dashboard (Home page)

The dashboard shows an overview of all the blog posts and a Map.
- Left: Blog Post preview cards
- Right: Google Map with markers at the positions of the blog posts

![Dashboard](/img/dashboard.jpg)

### 2. Menu Bar
- Add a menu bar which contains a logo (of your choice) and the Headline (a name of your choice) on the left side.
- In the menu provide a login button (text + icon) on the right side.
- The menu bar is available on all pages.

> **Icon Resources:** Some recommendations for icon sets: [FontAwesome](https://fontawesome.com/), [HeroIcons](https://heroicons.com/) or [react-icons](https://react-icons.github.io/react-icons/).

![Menu Bar](/img/menu-bar.jpg)

### 3. World Map with a Maps API

- Research for a method to integrate either the [Google Maps API](https://developers.google.com/maps/documentation/javascript/overview) or the [Mapbox API](https://docs.mapbox.com/mapbox-gl-js/guides/) into a component to display a world map. (You can either chose to use the "vanilla js" SDKs/libraries or research an existing React wrapper for any of these mapping services)
- For each blog post, put a marker on the map at the location of the post.
- Initially the map gets centered by the newest blog post entry.

#### Display Blog Posts at Location

- Make the markers clickable: on click, show the short preview of the blog post in the "InfoWindow".
- It contains:
  - title
  - visiting date
  - authors image and name (can be hardcoded)
  - Place a link, which links to the detail page: `/post/:id`
  - The InfoWindow can be closed by clicking on the "x" (which is placed at top right of the InfoWindow)

![Map marker](/img/map-marker.jpg)


### 4. Blog Posts
All your blog post data should be stored inside of a .json file within your project folder, which you can then `import` into your React application. This can also optionally later be replace with an actual backend API.

#### Blog Post Previews

- On the left all blog posts are listed as previews.
- The blog posts are ordered ascending by visiting date.
- Each preview contains:
  - title
  - visiting date
  - authors image + name (can be hardcoded)
  - image
  - When user clicks on one of the listed blog post than she gets linked to the detail page `/post/:id`

![Preview](/img/blog-post-preview.jpg)

#### Blog Post Detail
- On clicking at the title or the image of the blog post preview, the blog post is opened at the detail page `/post/:id`.
- A back button at the details page (position: top-left) links back to the dashboard.
- The detail page shows the full blog post, with all information.

**Content of a blog post**  
A blog post should contain:
  - title
  - visiting date
  - authors name
  - image
  - text
  - location with city and country

![Blog Post Detail](/img/blog-post.jpg)

### 5. Imprint / Contact

- Create a link `/contact` in the menu bar named "Contact".
- On the contact page place your (and your team mate's) name.
- Write two sentences about your project.
- Put your (or if you prefer [Hamburg Coding School's](https://hamburgcodingschool.com/contact/)) contact details:
  - name
  - address
  - email
  - phone number
- Write a note that this was a project from a course at Hamburg Coding School.


## Optional Bonus Tasks

You can choose any of these optional bonus tasks, in any order.

### Bonus 1: Map for Blog Post Detail Page

- On the Blog Post Detail page, place a the map on the right side next to the blog post.
- The map shows centered the location of the blog post.

![Map on Blog Post Detail](/img/bonus-map.jpg)

### Bonus 2: Get Blog Posts from Backend

- Create a seperate Node.js application to handle the backend part or use an existing, free backend service (something like [Supabase](https://supabase.com/) or [Firebase](https://firebase.google.com/))
- Serve your blog Posts through a REST Api with JSON

### Bonus 3: New Blog Post
- With the path `/new` a blog post form is shown, where a new blog post can be added.
- On submit, the new blog post is sent and stored to the backend.
- The form is cleared after adding a new blog post and the user gets directed to the Dashboard, again.  
- For the images: Save the image in your project manually in the public folder and use it with a relative path as string.  
  For instance: The image `barcelona.jpg` saved under `public/images` can be linked in the templates with `"/images/barcelona.jpg"`.
- Only a signed-in user can add a new blog posts.

![New Blog Post](/img/new-blog-post.jpg)

### Bonus 4: Edit Blog Posts

- At the `/post/:id` page, add an "edit" icon.
- If the user clicks that, the blog post turns into editable mode and entries can be updated and saved.  
>  Take into consideration using the same form component, which you might have defined for creating new blog post.
- The values of the form are pre-filled with the data from the blog post.
- On form submit the blog post gets updated and sent to the Backend.


### Bonus 5: Authentication / Login
- Add authentication to your Backend App
- If the login button is clicked, a login form is shown right below the login button under the menu bar.
- The User can login with their email and password.
- If successfully logged in, the login form disappears and instead of the login button a logout button is shown.
- If logged in, there should be another button for adding a new blog post (icon + text: "New blog post") on the left of the logout button. It links to `/new`, where the logged-in user can add a new blog post.

![Menu Bar](/img/login-logout.jpg)


### Bonus 6: Provide a user profile page
- Add a link in the menu bar, where the signed-in user can edit their profile.
- At the profile page, the signed-in user can upload a profile image and save their name.
- Use this information, if available,
  - on the page where a user can add new blog entries and
  - in the menu to show logged in users name and image.

## Modalities
- You can work alone or in a team of two.
- You are allowed (and even encouraged) to ask your classmates for help or help them.
- Use all the documentation and online tutorials as you like.
- You can ask the trainer for help anytime.
- For communication, use the Slack channel.
- You get two consultation classes:
  - December 7th at 18:00h - 20:00h (Location TBD)
  - December 12th at 18:00h - 20:00h (Location TBD)
- The consultation classes take place either .
- **Deadline: 18:00h on December 14th 2022**


## Submission

1. Upload your code to a new GitHub repository.

  - If you worked in a team, link the GitHub accounts of both of you in the README.md.

2. Send us an email with the following information:
  - A link to your GitHub repository
  - A link to your GitHub repository for the BackEnd app if implemented  
  - If you worked in a team, both your names
  - If you did any bonus tasks, list them
  - Send it to Helder (helder@hamburgcodingschool.com), Teresa (teresa@hamburgcodingschool.com) and Moritz (moritz@hamburgcodingschool.com)
