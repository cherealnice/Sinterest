# Schema Information

## sins
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | string    | not null, foreign_key (references users), indexed
body        | text      | not null
sin_id      | integer   | not null, foreign key (references sins), indexed

## SinBoard (join table)
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
title       | string    | not null, indexed
description | string    |

## imageable
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
target_id   | integer   | not null, foreign key (references users or sins), indexed
owner_type  | string    | not null, user or sin

## likeable
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
owner_id    | integer   | not null, foreign key (references users), indexed
target_id   | integer   | not null, foreign key (references users, boards, or sins), indexed
target_type | string    | nut null, (board, sin, or user)

## followable
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followable_id| integer  | not null, foreign key (references users, tags or boards), indexed
type        | string    | nut null, in (user, tag, or board)

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
