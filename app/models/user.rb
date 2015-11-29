class User < ActiveRecord::Base

  include PgSearch
  multisearchable :against => [:username, :fname, :lname]

  validates :session_token, :username, :password_digest, :email, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :session_token, :email, uniqueness: true
  validate  :email_format

  attr_reader :password

  after_initialize  :ensure_session_token
  before_validation :ensure_username

  has_many :sins
  has_many :boards, foreign_key: :author_id
  has_many :comments, foreign_key: :author_id, inverse_of: :author
  has_many :images, as: :imageable, inverse_of: :imageable
  has_many :likes
  has_many(
    :liked_boards,
    through: :likes,
    source: :likeable,
    source_type: 'Board'
  )
  has_many(
    :liked_sins,
    through: :likes,
    source: :likeable,
    source_type: 'Sin'
  )
  has_many :follows
  has_many(
    :followed_boards,
    through: :follows,
    source: :followable,
    source_type: 'Board'
  )
  has_many(
    :followed_users,
    through: :follows,
    source: :followable,
    source_type: 'User'
  )
  has_many :user_follows, class_name: 'Follow', as: :followable
  has_many :users_following, through: :user_follows, source: :user


  def self.find_by_credentials (email, password)
    user = User.find_by(email: email)
    if user
      user.is_password?(password) ? user : nil
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    if password
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def image
    images.first.image unless images.empty?
  end

  def image=(data)
    images.destroy_all
    images.new(image: data)
  end

  def all_followed_boards_ids
    boards = followed_boards.ids
    followed_users.includes(:boards).each do |user|
      boards.concat(user.boards.ids)
    end

    boards.uniq
  end

  def follows?(target)
    follow = follows.find_by(followable: target)
    return true if !!follow
    false
  end

  # private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def ensure_username
    if !self.username || self.username.strip.length == 0
      self.username = self.email.partition('@').first
    end
  end

  def email_format
    unless email =~ /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
      self.errors[:email] << 'Must be a valid email'
    end
  end
end
