# Bookmark App 
**Bookmark It** is a website bookmark management application. It aims to be as a11y user friendly as possible. Using jQuery AJAX, it communicates with a heroku database and maintains a list of user submitted bookmarks. Please note that the database resets every 24 hours so that data and the bookmarks from the app will be deleted every day. 

## Instructions
1. Fork and clone this repo
2. Navigate to the project folder and open `index.html` into your favorite browser. 
3. Start making bookmarks!

## User Stories
As a user:
* I can add bookmarks to my bookmark list. Bookmarks contain:
  - title
  - url link
  - description
  - rating (1-5)
* I can see a list of my bookmarks when I first open the app
* All bookmarks in the list default to a "condensed" view showing only title and rating
* I can click on a bookmark to display the "detailed" view
* Detailed view expands to additionally display description and a "Visit Site" link
* I can remove bookmarks from my bookmark list
* I receive appropriate feedback when I cannot submit a bookmark
* Check all validations in the API documentation (e.g. title and url field required)
* I can select from a dropdown a "minimum rating" to filter the list by all bookmarks rated above the chosen selection
* (Extension) I can edit the rating and description of a bookmark in my list

## Technical Requirements
* Use jQuery for AJAX and DOM manipulation
* Use namespacing to adhere to good architecture practices
* Minimal global variables!
* Create modules in separate files to organize your code
* Logically group your functions (e.g. API methods, store methods...)
* Keep your Data out of the DOM
* No direct DOM manipulation in your event handlers!
* Follow the React-ful design pattern - change your state, re-render your component
* Use semantic HTML
* Use responsive design
* Visually and functionally solid in viewports for mobile and desktop
* Follow a11y best practices
* Refer back to the lessons on accessibility, forms
* (Extension) Follow AJAX and a11y best practices
* AJAX and Aria Live for help

#Process
- [x] Before coding anything, think about your user flow. What does the initial loaded page look like? What is each action a user can take and how does it affect the visual layout?

- [x] Draw up gray box wireframes using MockFlow, a free wireframing tool of your choice, or on a napkin!
- [x] For every wireframed application state, include a populated store object as an example next to it
- [x] Get approval from Mentor (done!)
  * Notes: 
    * Positive feedback: Wireframes are good and it's nice that user stories are on it 
    * Q: Should I make two list one with condensed view and the other detailed view?
    * A: Keep the condensed view, add an element that you can hide with the visit button and the description

- [x] Set up your project. Create your Git repo, build your boilerplate file structure, connect jQuery and confirm your linked JavaScript/CSS files are being read by your HTML.
  * Note: 
    * I'm having issues with my CSS files. Somehow will only load the initial changes. 
      * Temporary fix: disable all CSS files and focus on functionality of my html and js

- [] **In Progress** Build an HTML version of all the different states of your application. 
  * Create sections for each html states
    1. Menu. `+New Bookmark button` & `Filter` dropdown. 
      - [x] Able to tab through each element using up and down arrow keys on filter
    2. `New Bookmark` fieldset 
    3. `Edit Bookmark` fieldset
    4. `Bookmark List` list <ul>
      a. `condensed view` will only show title and rating
      b. `detailed view` build separate element that has the `visit button` and `description` and use CSS + JS to toggle this hidden in `condensed view` and unhide in `detailed view`

- [] Review the [API Documention](https://thinkful-list-api.herokuapp.com/endpoints/bookmarks). Perform some test requests with Postman.

- [] Construct your modules and test every new function as you build it.