# Sinterest

[Link to App][live]

[live]: http://www.sinterest.xyz

## Project Description

Sinterest is an image-based social web application inspired by Pintrest built using Ruby on Rails and React.js. Sinterest allows users to:

- Create an account
- Log in / Log out
- Create, read, and edit Sins
- Create, read, and edit Boards
- Organize Sins within Boards
- Comment on Sins
- Like Sins
- Follow other Users and Boards

### Libraries / Gems Implemented
* ReactJS
* Browserify
* PGSearch
* Paperclip
* AWS
* Masonry React Component
* Figaro
* JBuilder
* Reactify
* ReactRouter
* Pagination/Infinite Scroll

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

### Flux Architecture

##### React Components Include
* Board Index/Show/IndexItem/Form
* Sin Index/Show/IndexItem/Form
* Comment Index/IndexItem/Form
* Header
* Search
* Session Form
* User Form/Show/Index

The main application is built with Flux, the React Router, and the React view
structure. Stores are implemented and a set of actions corresponding to
the needed CRUD functionality is implemented. CSS and SASS is used to style the views.

### Future Features
- Add multiple tags on Sins and Boards
- Prettify transitions
- Change logs for Boards
- Multiple sessions
- User Messaging
