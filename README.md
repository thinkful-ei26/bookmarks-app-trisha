# Bookmark App 
**[Bookmark It](https://thinkful-ei26.github.io/trisha-bookmarks-app/)** is a website bookmark management application. It aims to be as a11y user friendly as possible. Using jQuery AJAX, it communicates with a heroku database and maintains a list of user submitted bookmarks. Please note that the database resets every 24 hours so that data and the bookmarks from the app will be deleted every day.  is a website bookmark management application. It aims to be as a11y user friendly as possible. Using jQuery AJAX, it communicates with a heroku database and maintains a list of user submitted bookmarks. Please note that the database resets every 24 hours so that data and the bookmarks from the app will be deleted every day. 


## Quicklinks
Reference Repos: 
* [heroku API developer doc](https://thinkful-list-api.herokuapp.com/endpoints/bookmarks)
* [shopping list with-api](https://github.com/thinkful-ei26/shopping-list-week-2/tree/with-api)
* [thinkful-tube-solo](https://github.com/kronicle114/thinkful-tube-solo)
* [babyQuizApp](https://github.com/kronicle114/babyAnimalQuizApp)
* [Starting Shopping List repl.it](https://repl.it/@thinkful/Shopping-list-app-jQuery-1)

Other:
* [thinkful dashboard](https://dashboard.thinkful.com/)


## Instructions
1. Fork and clone this repo
2. Navigate to the project folder and open `index.html` into your favorite browser. 
3. Start making bookmarks!

## User Stories
As a user:

- [] I can add bookmarks to my bookmark list. 
  * :rotating_light: handler for adding new bookmarks is broken. Getting a 400 bad request. Something wrong with my API call. 
- [x]Bookmarks contain:
  - [x] title
  - [x] url link
  - [x] description
  - [x] rating (1-5)
- [x] I can see a list of my bookmarks when I first open the app
- [x] All bookmarks in the list default to a "condensed" view showing only title and rating
- [] I can click on a bookmark to display the "detailed" view
  * Fix the css so that you have an icon instead of an awkward "Click anywhere to expand"
- [x] Detailed view expands to additionally display description and a "Visit Site" link
- [x] I can remove bookmarks from my bookmark list
- [x] I receive appropriate feedback when I cannot submit a bookmark
- [] Check all validations in the API documentation (e.g. title and url field required)
- [x] I can select from a dropdown a "minimum rating" to filter the list by all bookmarks rated above the chosen selection

> (Extension) I can edit the rating and description of a bookmark in my list

## Technical Requirements
- [x] Use jQuery for AJAX and DOM manipulation
- [x] Use namespacing to adhere to good architecture practices
- [x] Minimal global variables!
- [x] Create modules in separate files to organize your code
- [x] Logically group your functions (e.g. API methods, store methods...)
- [x] Keep your Data out of the DOM
- [] :question: No direct DOM manipulation in your event handlers!
- []  Follow the React-ful design pattern - change your state, re-render your component
- [] :question: Use semantic HTML
- [] Use responsive design
- [] Visually and functionally solid in viewports for mobile and desktop
- [] Follow a11y best practices
- [] Refer back to the lessons on accessibility, forms

> (Extension) Follow AJAX and a11y best practices. AJAX and Aria Live for help

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

- [x] Build an HTML version of all the different states of your application. 
  * Create sections for each html states
    1. Menu. `+New Bookmark button` & `Filter` dropdown. 
      - [x] Able to tab through each element using up and down arrow keys on filter
    2. - [x] `New Bookmark` fieldset 
      - [] create handler for newbookmark and to set it to the DOM `createBookmark`
    3. - [x] `Edit Bookmark` fieldset
      - [] create handler `findAndUpdate` for edit bookmark
    4. - [x] Create `Bookmark List` list <ul>
      - [x] a. `condensed view` will only show title and rating
      - [x] b. `detailed view` is a separate element within `condensed view` that has the `visit button` and `description` and use CSS + JS to toggle this hidden in `condensed view` and unhide in `detailed view`
        * :warning: Can't decide between the functionalities of edit/save
          * when edit/save button is toggled you should be able to edit or save AN EXISTING bookmark (so store already has info about this item and you just need to find the id of this item)
          * :warning: THIS IS DIFFERENT FROM THE `NEW BOOKMARK` form where you do not have the item info in store yet. 
- [x] **In Progress** Review the [API Documention](https://thinkful-list-api.herokuapp.com/endpoints/bookmarks). 

- [x] Perform some test requests with Postman.
  * Performed GET, POST, PATCHED, and DELETE tests

```javascript
//Example array when POST & GET is used

[
  {
    "id": "cjo9usuvx00000k1e3mq5ocv0",
    "title": "Google",
    "url": "https://www.google.com/",
    "desc": "I really like google",
    "rating": 5
  },
  {
    "id": "cjo9utlt400010k1ees9vk3g4",
    "title": "Yahoo",
    "url": "https://www.yahoo.com/",
    "desc": "I don't like yahoo",
    "rating": 2
  },
  {
    "id": "cjo9uuzxp00030k1em1a5sxyd",
    "title": "Bing",
    "url": "https://www.bing.com/",
    "desc": "I don't use bing",
    "rating": 4
  },
  {
    "id": "cjo9y615d00040k1esqna1q38",
    "title": "GitHub",
    "url": "https://www.github.com/",
    "desc": null,
    "rating": null
  }
]

```

- [x] Construct your modules and test every new function as you build it.
