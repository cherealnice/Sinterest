# Phase 5: Reminders and Garbage Collection

## Rails
### Models
* Follow

### Controllers
* Api::FollowController (create, destroy, index)
* Api::SearchController

### Views

## Flux
### Views (React Components)
* FollowsIndex
  - FollowsIndexItem
* FollowShow
* FollowForm
* Search
* SearchResultsIndex

### Stores
* Follow
* Search

### Actions
* ApiActions.receiveAllFollows
* ApiActions.receiveSingleFollow
* ApiActions.deleteFollow
* ApiUtil.recieveSearchResults

### ApiUtil
* ApiUtil.fetchAllFollows
* ApiUtil.fetchSingleFollow
* ApiUtil.createFollow
* ApiUtil.destroyFollow
* ApiActions.search

## Gems/Libraries
* PGSearch
