# Phase 4: Allow Complex Styling in Notes (1 day)

## Rails
### Models
* Comment
* Like

### Controllers
* Api::CommentsController (create, destroy, index, show, update)
* Api::LikesController (create, destroy)

### Views
* comments/index.json.jbuilder
* comments/show.json.jbuilder

## Flux
### Views (React Components)
* CommentsIndex
  - CommentsIndexItem
* CommentForm
* LikeForm
* SearchIndex

### Stores
* Comment

### Actions
* ApiActions.receiveAllComments
* ApiActions.receiveSingleComment
* ApiActions.deleteComment

### ApiUtil
* ApiUtil.fetchAllComments
* ApiUtil.fetchSingleComment
* ApiUtil.createComment
* ApiUtil.editComment
* ApiUtil.destroyComment

## Gems/Libraries
