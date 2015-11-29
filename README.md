# Sinterest

[Heroku link][heroku]

[heroku]: http://sinterest-app.herokuapp.com

## Minimum Viable Product

Sinterest is a web application inspired by Pintrest built using Ruby on Rails
and React.js. Sinterest allows users to:

- [X] Create an account
- [X] Log in / Log out
- [X] Create, read, and edit Sins
- [X] Create, read, and edit Boards
- [X] Organize Sins within Boards
- [X] Comment on Sins
- [X] Like Sins
- [X] Follow other Users and Boards

## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Sin Model and JSON API (1.5 days)

In Phase 1, I will begin by implementing user signup and authentication (using
BCrypt). There will be a basic landing page after signup that will contain the
container for the application's root React component. Before building out the
front end, I will begin by setting up a full JSON API for Sins and Boards.

[Details][phase-one]

### Phase 2: Flux Architecture and Sin CRUD (2.5 days)

Phase 2 is focused on setting up Flux, the React Router, and the React view
structure for the main application. After the basic Flux architecture has been
set up, a Sin store will be implemented and a set of actions corresponding to
the needed CRUD functionality created. Once this is done, I will create React
views for the Sins `Index`, `IndexItem` and `Form`. At the end of Phase 2,
Sins can be created, read, and edited in the browser.  Lastly, while constructing the views I will start using basic CSS for
styling.

[Details][phase-two]

### Phase 3: Boards Architecture (1.5 days)

Phase 3 adds organization to the Sins. Boards contain Sins, which have
their own `Index` view. Create JSON API for Boards. Boards names also function
as tags. Users can bring up Sins in a separate `SearchIndex`
view by searching for a Board name.

[Details][phase-three]

### Phase 4: Add comments and likes to Sins and Boards (1 day)

Add a comment and like that can live either on a Board or a Sin.

[Details][phase-four]

### Phase 5: User Following and Search (1 day)

Phase 5 introduces the feature of users can follow other users,
which will add the followed user's Boards to the follower's main page.
In addition, I will implement a feature for searching boards, sins, and users using PGSearch.

[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1 day)

CSS will have been used to keep things organized up until now, but in
Phase 6 I will add styling flourishes and make modals out of some elements (like
the Main page and the User Show).

### Bonus Features (TBD)
- [ ] Organize Boards by categories
- [ ] Add multiple tags on Sins and Boards
- [ ] Prettify transitions
- [ ] Use javascript library for cleaner tag selection
- [ ] Change logs for Boards
- [ ] Pagination / infinite scroll for Notes Index
- [ ] Multiple sessions
- [ ] Messaging

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
