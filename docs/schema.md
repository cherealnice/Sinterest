# Schema Information

## sins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null, limit 100
description | string    | not null, limit 500
link        | string    | limit 2083
author_id   | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | string    | not null, foreign_key (references users), indexed
body        | text      | not null
sin_id      | integer   | not null, foreign key (references sins), indexed

## sinboards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
board_id    | integer   | not null, foreign key (references boards), indexed
sin_id      | string    | not null, foreign key (references sins), indexed

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null, indexed, limit 50
description | string    | limit 500

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
imageable_id| integer   | not null, foreign key (references users), indexed
imageable_type| string  | not null, user or sin, indexed
string      | title     |

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
likeable_id | integer   | not null, foreign key (references users, boards, or sins), indexed
likeable_type| string    | nut null, (board, sin, or user)

## follows
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
user_id        | integer   | not null, foreign key (references users), indexed
followable_id  | integer   | not null, foreign key (references users, tags or boards), indexed
followable_type| string    | nut null, in (user, tag, or board)

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, indexed, unique
username        | string    | not null, indexed, unique
fname           | string    |
lname           | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## categories
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggable
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
owner_id    | integer   | not null, foreign_key (references users, sins, or boards)
type        | string    | not null, users, sins, or boards
