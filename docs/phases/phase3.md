# Phase 3: Notebooks and Tags (2 days)

## Rails
### Models
* Board

### Controllers
* Api::BoardsController (create, destroy, index, show, update)

### Views
* boards/index.json.jbuilder
* boards/show.json.jbuilder

## Flux
### Views (React Components)
* BoardsIndex
  - BoardsIndexItem
* BoardForm
* SearchIndex

### Stores
* Board

### Actions
* ApiActions.receiveAllBoards
* ApiActions.receiveSingleBoard
* ApiActions.deleteBoard

### ApiUtil
* ApiUtil.fetchAllBoards
* ApiUtil.fetchSingleBoard
* ApiUtil.createBoard
* ApiUtil.editBoard
* ApiUtil.destroyBoard

## Gems/Libraries
