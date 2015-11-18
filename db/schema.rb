
ActiveRecord::Schema.define(version: 20151118144517) do

  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.string   "title",       limit: 50,  null: false
    t.string   "description", limit: 500
    t.integer  "author_id",               null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
  end

  add_index "boards", ["author_id"], name: "index_boards_on_author_id", using: :btree
  add_index "boards", ["title"], name: "index_boards_on_title", using: :btree

  create_table "comments", force: :cascade do |t|
    t.integer  "author_id",  null: false
    t.text     "body",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "sin_id",     null: false
  end

  add_index "comments", ["author_id"], name: "index_comments_on_author_id", using: :btree
  add_index "comments", ["sin_id"], name: "index_comments_on_sin_id", using: :btree

  create_table "sin_boards", force: :cascade do |t|
    t.integer  "board_id",   null: false
    t.integer  "sin_id",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "sin_boards", ["board_id"], name: "index_sin_boards_on_board_id", using: :btree
  add_index "sin_boards", ["sin_id"], name: "index_sin_boards_on_sin_id", using: :btree

  create_table "sins", force: :cascade do |t|
    t.string   "title",       limit: 100,  null: false
    t.string   "description", limit: 500,  null: false
    t.string   "link",        limit: 2083
    t.integer  "board_id",                 null: false
    t.integer  "user_id",                  null: false
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
  end

  add_index "sins", ["board_id"], name: "index_sins_on_board_id", using: :btree
  add_index "sins", ["title"], name: "index_sins_on_title", using: :btree
  add_index "sins", ["user_id"], name: "index_sins_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "fname"
    t.string   "lname"
    t.string   "password_digest", null: false
    t.string   "email",           null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "username",        null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
